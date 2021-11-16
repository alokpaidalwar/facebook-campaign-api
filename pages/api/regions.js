export default async function regionHandler(req, res) {
    
    const {body,method} = req;

    switch (method) {
      case 'POST':
        //get regions from facebook search api by country code
        const requestOptions = {
            method: 'GET'
        };
        await fetch(`https://graph.facebook.com/v12.0/search?location_types=["region"]&type=adgeolocation&q=&limit=1000&country_code=${body.code}&access_token=${process.env.ACCESS_TOKEN}`, requestOptions)
        .then(response => response.json())
        .then(result => {
            res.status(200).json({result})
        })
        .catch(error => console.log('error', error));
        break
      default:
        res.setHeader('Allow', ['POST'])
        res.status(405).end(`Method ${method} Not Allowed`)
    }
  }