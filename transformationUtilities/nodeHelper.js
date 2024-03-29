function analyzeFlowNodes(flowNode) {
    let entriesOfFlowNode = Object.entries(flowNode);
    let countOfNodeVsIncomingNode = {};

    for (let [key, value] of entriesOfFlowNode) {
        if (Array.isArray(value)) {
            countOfNodeVsIncomingNode = manageListNodes(value, countOfNodeVsIncomingNode);
        }

        if (value.constructor.name === "Object") {
            let targetRefName = value?.connector?.targetReference;
            countOfNodeVsIncomingNode = manageCountOfNode(targetRefName, countOfNodeVsIncomingNode, false);
        }
    }
    return countOfNodeVsIncomingNode;
}

function manageCountOfNode(nodeName, countStoreMap, isName) {
    if (!nodeName) {
        return countStoreMap;
    }
    if (isName && !countStoreMap.hasOwnProperty(nodeName)) {
        countStoreMap[nodeName] = 0;
        return countStoreMap;
    }
    if (isName && countStoreMap.hasOwnProperty(nodeName)) {
        return countStoreMap;
    }
    if (countStoreMap.hasOwnProperty(nodeName)) {
        countStoreMap[nodeName] = countStoreMap[nodeName] + 1;
    } else {
        countStoreMap[nodeName] = 1;
    }
    return countStoreMap;
}

function manageListNodes(listOfNodes, countStoreMap) {
    if (!Array.isArray(listOfNodes) || !listOfNodes) {
        return countStoreMap;
    }
    Array.from(listOfNodes).forEach(item => {
        // Need to remove static chaining
        let defaultConnector = item?.defaultConnector?.targetReference;
        let faultConnector = item?.faultConnector?.targetReference;
        let nodeName = item?.name;
        let targetRefName = item?.connector?.targetReference;
        let nextValueRef = item?.nextValueConnector?.targetReference;
        let noMoreValuesConnector = item?.noMoreValuesConnector?.targetReference;
        let ruleList = item?.rules;

        // Need to make it dynamic based on list of strings
        countStoreMap = manageCountOfNode(nodeName, countStoreMap, true);
        countStoreMap = manageCountOfNode(targetRefName, countStoreMap, false);
        countStoreMap = manageCountOfNode(nextValueRef, countStoreMap, false);
        countStoreMap = manageCountOfNode(defaultConnector, countStoreMap, false);
        countStoreMap = manageCountOfNode(faultConnector, countStoreMap, false);
        countStoreMap = manageCountOfNode(noMoreValuesConnector, countStoreMap, false);

        if (Array.isArray(ruleList) && ruleList.length > 0) {
            ruleList.forEach(ruleItem => {
                let targetRefName = ruleItem?.connector?.targetReference;
                countStoreMap = manageCountOfNode(targetRefName, countStoreMap, false);
            })
        }
    }
    )
    return countStoreMap;
}

function getNodesWithoutIncomingConnections(analyzedResultMap) {
    let entriesOfAnalyzedMap = Object.entries(analyzedResultMap);

    let nodesWithoutIncomingEdge = [];

    for (let [key, value] of entriesOfAnalyzedMap) {
        if (value === 0) {
            nodesWithoutIncomingEdge.push({ [key]: value });
        }
    }
    return nodesWithoutIncomingEdge;

}


export { analyzeFlowNodes, getNodesWithoutIncomingConnections }