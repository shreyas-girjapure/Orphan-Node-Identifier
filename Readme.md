## Problem Statement

While deployments with source based metadata , We overwrote flow metadata. There were some elements left with no incoming edge but outgoing edge.

This converted flow into FREE-FORM 😑. Some of us already hate flows and freeform layout just makes developer experience even worse.

Solving for a really few people who are facing or have faced **one or more elements without an incoming connection.** error and want to find out which nodes do not have incoming edge but have outgoing edge.

## How to Use

1. Get metadata of the flow you want to analyze with tooling API [Or Use salesforce inspector on flow detail page]
1. Make a `POST` request on https://flow-incoming-edge-analyzer.onrender.com/analyze
1. Add copied metadata into body.
1. **Hit it !!!!!!**
1. Based on analysis you should get array back in `result` tag. 
1. Result is list of nodes without incoming nodes but have outgoing edge.

## Contributions
Feel free to provide UI or feature support in Salesforce Reloaded Extension 😁