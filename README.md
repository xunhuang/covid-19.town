
Run Locally
-----------
npm install 
npm start


Deploy To Firebase
-----------------
firebase login
firebase init  
     a. choose "Hosting: Configure and deploy Firebase Hosting sites"
     b.  <-------- select a project that setup with hosting before hand (or
                    create new
npm run build
firebase deploy --only hosting


Deploy To Cloudfare
-------------------

wrangler init --site covid19town
(this creates wrangler.toml)
enter the account id + zone id
change bucket line to 

bucket = "./build"

exit wrangler.html


If first time set up cloud flare
- goto Workers KV - enable unlimited plan, $5/month
- Create a API token, using a template for "Edit Cloudflare Workers"
- wrangler config (enter the API token)

wrangler preview
wrangler publish   ( this should create a worker name covid19town)


To complete DNS settingo
- the usual take over domain name DNS update
- Add a *RANDOM* A record of the domain name covid-19.town --> 192.2.0.1 (random)
- Workers -> using routes -> add a route   (for whatever domain name)
*covid-19.town/*	covid19town    [ the worker name above]



- 
