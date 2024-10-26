
# Eventlify

Eventlify is a Next.js 14 project, created by Nevil, with a focus on event management and ticket purchasing. Built using Next.js and MongoDB, and hosted on OnRender, this platform allows users to discover events nearby, purchase tickets, and even create their own events with custom details. It utilizes Clerk for authentication, Stripe for payment processing (including webhooks for payment confirmations), and UploadThing for image uploading. Additionally, Zod and React Hook Form are used for robust form validation, ensuring a seamless and secure user experience.




## Authors

- [@nevilsanchpara](https://www.github.com/nevilsanchpara)


## Demo

https://eventlify-nextjs.onrender.com/


#### Demo Credentials:
Email: gomad30168@nestvia.com

Password: Eventlify@123


## Deployment

To deploy this project run

Create Account on Render & connect with github.Then, Add all environment variables & choose last commit to deploy. Make sure, Project is working fine on localhost as well.


## Installation

Install Eventlify with Git

```bash
  npm install
  ADD .ENV file
  npm run dev
```
    
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file
#### Clerk
`CLERK_SECRET_KEY=`
`NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=`

`NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=`

`NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=`

`NEXT_PUBLIC_CLERK_SIGN_IN_URL=`

`NEXT_PUBLIC_CLERK_SIGN_UP_URL=`

#### MongoDB
`MONGODB_URI=`

#### Server
`NEXT_PUBLIC_SERVER_URL=`

`PORT=`

#### Stripe
`NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=`

`STRIPE_SECRET_KEY=`

`STRIPE_WEBHOOK_SECRET=`

#### Uploadthing
`UPLOADTHING_APP_ID=`

`UPLOADTHING_SECRET=`

#### Webhook
`WEBHOOK_SECRET=`


## Screenshots


![App Screenshot](https://i.ibb.co/N62BzZg/Screenshot-2024-10-26-at-5-33-49-AM.png)


![App Screenshot](https://i.ibb.co/WsGBL90/Screenshot-2024-10-26-at-5-34-21-AM.png)

![App Screenshot](https://i.ibb.co/WBT48Tg/Screenshot-2024-10-26-at-5-35-41-AM.png)

![App Screenshot](https://i.ibb.co/vwMXfw9/Screenshot-2024-10-26-at-5-36-11-AM.png)

![App Screenshot](https://i.ibb.co/HpDzvL2/Screenshot-2024-10-26-at-5-36-30-AM.png)


![App Screenshot](https://i.ibb.co/N2WwrYz/Screenshot-2024-10-26-at-5-36-53-AM.png)

