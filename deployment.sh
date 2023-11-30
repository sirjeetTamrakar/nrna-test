#!/bin/sh
APISERVER=https://7B97E67E53E37395B18AA519DC8846AA.gr7.eu-west-2.eks.amazonaws.com && \
    NAMESPACE=fm && \
    DEPLOYMENT=ui && \
curl --cacert $2 --header "Authorization: Bearer $1" --data '{"spec":{"template":{"metadata":{"annotations":{"kubectl.kubernetes.io/restartedAt":"'"$(date +%Y-%m-%dT%T%z)"'"}}}}}' -XPATCH   -H "Accept: application/json, */*" -H "Content-Type: application/strategic-merge-patch+json" ${APISERVER}/apis/apps/v1/namespaces/${NAMESPACE}/deployments/${DEPLOYMENT}
