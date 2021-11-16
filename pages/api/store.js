const bizSdk = require('facebook-nodejs-business-sdk');
const AdAccount = bizSdk.AdAccount;

//keys accessed from env.local files
const access_token = process.env.ACCESS_TOKEN;
const account_id = process.env.ACCOUNT_ID;

const api = bizSdk.FacebookAdsApi.init(access_token);
const account = new AdAccount(account_id);

export default async function userHandler(req, res) {
        
    const {body,method} = req

    switch (method) {
      case 'POST':
        // create campaign and ad set of the created campaign
        try{
            let params;
            params = {
                'name' : `Campaign ${body.name}`,
                'objective' : 'POST_ENGAGEMENT',
                'status' : 'PAUSED',
                'special_ad_categories' : [],
            };
            const campaign = await account.createCampaign([],params);
            params = {
                'name' : `AdSet ${body.name}`,
                'lifetime_budget': '2000000',
                'start_time' : '2021-11-16T11:38:19-0700',
                'end_time' : '2021-11-18T11:38:19-0700',
                'campaign_id' : campaign._data.id,
                'bid_amount' : '500',
                'billing_event' : 'IMPRESSIONS',
                'optimization_goal' : 'POST_ENGAGEMENT',
                'targeting' : {
                    'age_min':body.minAge,
                    'age_max':body.maxAge,
                    'genders':[body.gender],
                    'geo_locations':{
                        'countries':[body.country],
                        'regions':[{'key': body.region}]
                    }
                },
                'status' : 'PAUSED',
            };
            await account.createAdSet([],params); // comment this line if facing issue with standbox access token
            res.status(200).json({status:200, campaign_id: campaign._data.id})
        }catch(err){
            res.status(402).json({status: 402, error: err.message})
        }
        break
      default:
        res.setHeader('Allow', ['POST'])
        res.status(405).end(`Method ${method} Not Allowed`)
    }
  }