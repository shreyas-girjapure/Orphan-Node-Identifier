import { nodesNotAllowed, removeKeysFromObject } from "./transformationUtilities/utils.js";

import { analyzeFlowNodes, getNodesWithoutIncomingConnections } from "./transformationUtilities/nodeHelper.js";


import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));

app.post('/analyze', (req, res) => {
    const inputData = req.body;

    if (!inputData || Object.keys(inputData).length === 0) {
        return res.status(400).json({ error: 'Invalid data. Please provide valid JSON data.' });
    }

    const sanitizedData = removeKeysFromObject(inputData, nodesNotAllowed);
    const analysisResult = analyzeFlowNodes(sanitizedData);
    let nonIncomingNodeList = getNodesWithoutIncomingConnections(analysisResult)

    return res.status(200).json({ result: nonIncomingNodeList });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
