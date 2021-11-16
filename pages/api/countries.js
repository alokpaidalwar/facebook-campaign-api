export default async function countryHandler(req, res) {
        
    const {method} = req

    switch (method) {
      case 'GET':
        //get countries from facebook search api
        const requestOptions = {
            method: 'GET'
        };
        await fetch(`https://graph.facebook.com/v12.0/search?access_token=${process.env.ACCESS_TOKEN}&type=adgeolocation&location_types=['country']&q=&limit=1000`, requestOptions)
        .then(response => response.json())
        .then(result => res.status(200).json({result}))
        .catch(error => console.log('error', error));
        break
      default:
        res.setHeader('Allow', ['POST'])
        res.status(405).end(`Method ${method} Not Allowed`)
    }
}