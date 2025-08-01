import main from "../services/ai.js";


export const  getresponse = async (req, res) => {
    try {
        const code = req.body.code;
        const responseText = await main(code);
        res.status(200).send( responseText );
    } catch (error) {
        console.error("Error generating AI response:", error);
        res.status(500).json({ error: "Failed to generate AI response" });
    }
}