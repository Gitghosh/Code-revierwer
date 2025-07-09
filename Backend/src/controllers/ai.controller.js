//  const aiService = require("../services/ai.services")//Here we are requiring generateContent exported from ai.service.js
 
 
 
//  module.exports.getResponse = async (req, res)=>{
//     const prompt = req.query.prompt;
//     if (!prompt){
//         return res.status(400).send("Prompt is required");
//     }
//     const response = await aiService(prompt);//Here we are passing the prompt to aiService.
//     res.send(response);
// }


const aiService = require("../services/ai.service")


module.exports.getReview = async (req, res) => {

    const code = req.body.code;

    if (!code) {
        return res.status(400).send("Prompt is required");
    }

    const response = await aiService(code);


    res.send(response);

}