## Problem Statement

While doing deployments with source based metadata , We overwrote some edges/targetReferences of elements. Now There were some elements left with no incoming edge but outgoing edge.

This made flow throw error when trying to AUTO-LAYOUT [FREE FORM SUCKS 😑]. Some of us already hate flows and freeform layout just makes developer experience even worse.

Solving for a really few people out there who are facing this beautiful error **one or more elements without an incoming connection.** and want to find out which nodes do not have incoming edge but have outgoing edge.

## How to Use
> Note :
> This API is hosted on free VM instance.
> Spinning up machince after 15 minutes of inactivity takes less than 1 min.
> Please be patient for a minute. 


1. Get metadata of the flow you want to analyze with tooling API [Or Use salesforce inspector on flow detail page]
1. Make a `POST` request on https://flow-incoming-edge-analyzer.onrender.com/analyze
1. Add copied metadata into body.
1. **Hit it !!!!!!**
1. Based on analysis you should get array back in `result` tag. 
1. Result is list of nodes without incoming nodes but have outgoing edge.

## Contributions
1. Feel free to provide UI or feature support in Salesforce Reloaded Extension 😁
1. There are some really bad lines of code ever written in repository , Feel free to make PRs to solve for them.
