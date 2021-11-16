import { useForm } from "react-hook-form";
import React, { useEffect, useState } from "react";
import {Flex, Box, FormErrorMessage, FormLabel, FormControl, Input, Button, Heading, Select, Spinner, Text,
     Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverBody, PopoverFooter, PopoverArrow, PopoverCloseButton} from "@chakra-ui/react";
import dynamic from 'next/dynamic';

export default function Home() {
    //Dynamic Import leaflet map component
    const Map = dynamic(() => import('../components/map'),{ ssr: false });

    const {
        handleSubmit,
        register,
        reset,
        getValues,
        formState: { errors, isSubmitting }
    } = useForm();

    //state variables initialization
    const [countries, setCountries] = useState([]);
    const [regions, setRegions] = useState([]);
    const [message, setMessage] = useState(null);
    const [messageColor, setMessageColor] = useState(null);
    const [loading, setLoading] = useState(true);
    const [latLon, setLatLon] = useState([]);

    //get country list on page load
    useEffect(()=>{
        async function getCountriesData(){
            await fetch("/api/countries/", {
                method: "GET",
                headers: new Headers({
                  'Content-Type': 'application/json',
                  'Accept': 'application/json',
                }),
            }).then(res => res.json()).then(res => 
                res && res.result && res.result.data ? setCountries(res.result.data) : setCountries([])
            );
        }
        getCountriesData();
        setLoading(false);
    },[])

    //fetch region list on when country selected
    const handleCountryChange = (e) => {
        setRegions([]);
        setLoading(true);
        fetch("/api/regions/", {
            body: JSON.stringify({code: e.target.value}),
            method: "POST",
            headers: new Headers({
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            }),
        }).then(res => res.json()).then(res => {
            res && res.result && res.result.data ? setRegions(res.result.data) : setRegions([]) 
            setLoading(false);
        }).catch(err => setLoading(false));
    }

    //fetch region list on when country selected
    const handleRegionChange = (e) => {
        setLoading(true);
        setLatLon([]);
        const params = new URLSearchParams({
            q: `${e.target.options[e.target.selectedIndex].text}, ${getValues('country')}`,
            limit: 1,
            format: "json"
        });
        fetch(`https://nominatim.openstreetmap.org/search?${params.toString()}`, {
            method: "GET",
            headers: new Headers({
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Access-Control-Allow-Origin': "*"
            }),
        }).then(res => res.json()).then(res => {
            if(res.length == 1){
              setLatLon([res[0].lat, res[0].lon]);
            }
            setLoading(false);
        }).catch(err => setLoading(false));
    }

    //create campaign on form submit
    const onSubmit = async (values) => {
        await fetch("/api/store/", {
            body: JSON.stringify(values),
            method: "POST",
            headers: new Headers({
              'User-Agent': '*',
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            }),
        }).then(res => res.json())
        .then(res => {
            if(res.status == 200) {
               setMessage(`Campaign is added and id is ${res.campaign_id}`)
               setMessageColor('green');
               reset();
               setLatLon([]);
            }else{ 
               setMessage(res.error);
               setMessageColor('red');
            }
        })
        .catch(err => setMessage(err));
    }

    //show location in map view if lat-lon present
    const showMap = () => (
        <Popover>
            <PopoverTrigger >
                <Button mt={4}>Click to view on map</Button>
            </PopoverTrigger>
            <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>Map View!</PopoverHeader>
                <PopoverBody>
                  {latLon.length == 2 &&  <Map position={latLon}/> }
                </PopoverBody>
            </PopoverContent>
        </Popover>
    )
    
    return (
        <Flex width="full" align="center" justifyContent="center">
          <Box m={6} p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="xl">
                <Box textAlign="center">
                <Heading>Facebook Campaign API</Heading>
                </Box>
                <Box my={4} textAlign="left">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormControl isInvalid={errors.name}>
                        <FormLabel htmlFor="name">Name</FormLabel>
                        <Input
                        id="name"
                        placeholder="Name"
                        {...register("name", {
                            required: "This is required"
                        })}
                        />
                        <FormErrorMessage>
                        {errors.name && errors.name.message}
                        </FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={errors.minAge}>
                        <FormLabel htmlFor="minAge">Minimum Age</FormLabel>
                        <Input
                        id="minAge"
                        placeholder="Minimum Age"
                        {...register("minAge", {
                            required: "This is required",
                        })}
                        />
                        <FormErrorMessage>
                        {errors.minAge && errors.minAge.message}
                        </FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={errors.maxAge}>
                        <FormLabel htmlFor="maxAge">Max Age</FormLabel>
                        <Input
                        id="maxAge"
                        placeholder="Maximum Age"
                        {...register("maxAge", {
                            required: "This is required"
                        })}
                        />
                        <FormErrorMessage>
                        {errors.maxAge && errors.maxAge.message}
                        </FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={errors.gender}>
                        <FormLabel htmlFor="gender">Gender</FormLabel>
                            <Select 
                            id="gender"
                            placeholder="Select option" 
                            {...register("gender", {
                                required: "This is required"
                            })}>
                                <option value="1">Male</option>
                                <option value="2">Female</option>
                                <option value="3">Other</option>
                            </Select>
                        <FormErrorMessage>
                        {errors.gender && errors.gender.message}
                        </FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={errors.country} onChange={handleCountryChange}>
                        <FormLabel htmlFor="country">Country</FormLabel>
                            <Select 
                            id="country"
                            placeholder="Select option"
                            {...register("country", {
                                required: "This is required"
                            })}>
                                {countries.map((country) => <option value={country.key} key={country.key}>{country.name}</option> )}
                            </Select>
                        <FormErrorMessage>
                        {errors.country && errors.country.message}
                        </FormErrorMessage>
                    </FormControl>
                    { loading ? <Spinner color="blue.500" m={6}  size="md" /> :
                        <FormControl isInvalid={errors.region} onChange={handleRegionChange}>
                            <FormLabel htmlFor="region">Region</FormLabel>
                                <Select 
                                id="region"
                                placeholder="Select option"
                                {...register("region", {
                                    required: "This is required"
                                })}>
                                    {regions.map((region) => <option value={region.key} key={region.key}>{region.name}</option> )}
                                </Select>
                            <FormErrorMessage>
                            {errors.region && errors.region.message}
                            </FormErrorMessage>
                        </FormControl>
                    }
                    {latLon.length == 2 && showMap() }
                    <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit" width="full">
                        Submit
                    </Button>
                </form>
                {message && <Text mt={8} color={messageColor}>{message}</Text>}
                </Box>
          </Box>
        </Flex>
    );
}

