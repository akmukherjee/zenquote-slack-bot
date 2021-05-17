const axios = require('axios').default;
require('dotenv').config()
//Set Slack URL
SLACK_URL=process.env.SLACK_URL


const getZenQuote = async ()=>{
    try {
        ZEN_URL = 'https://zenquotes.io/api/random';
        // Get the Zen Quote
        const response = await axios.get(ZEN_URL);
        return response.data;
      }catch (error) {
        console.log(error);; // catches both errors
      }
  
}
/*****************************************************************************
 * A Function that posts to the desired Slack Channel Using Incoming Webhooks
 *****************************************************************************/
const sendMessageToSlack =async(payload) =>{
    try {
        //Post the Slack URL with payload
        const response = await axios.post(SLACK_URL,JSON.stringify(payload));
        console.log('SUCCEEDED: Sent slack webhook: \n', response.data);
        return response.data;
      }catch (error) {
        console.log('FAILED: Send slack webhook', error);
      }
}
/*****************************************************************************
 * A Function that sets the Slack Payload with data
 *****************************************************************************/
const setSlackPayload = (zen_quote_data) =>{
    //Getting the Quote and Author
    quote=zen_quote_data.q;
    author=zen_quote_data.a;

    //console.log(zen_quote_data[0])
    //Concatenating
    stars=":star: *Quote for the Day* :star:\n"
    message = stars+quote+" by *"+ author+"*" 

    //Generating a random string
    randstring = Math.random().toString(36).substring(7)
    IMAGE_URL= 'https://picsum.photos/200?'

    //Appending the random string to URL for cache busting
    image_url_slack= IMAGE_URL+randstring
    
    payload ={
        "blocks": [
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": message
                },
                "accessory": {
                    "type": "image",
                    "image_url": image_url_slack,
                    "alt_text": "alt text for image"
                }
            }
        ]

    }
    return payload;
}
/*****************************************************************************
 * The Main function that calls the Zen API and then the Slack API
 *****************************************************************************/
const main = async()=>{
    //Call Zen API
    const zen_quote_data = await getZenQuote(); 
    //Set Slack Payload
    payload =  setSlackPayload(zen_quote_data[0]);
    //Send Slack Message    
    response = await sendMessageToSlack(payload)  

}
//Invoke the Main function
main()







