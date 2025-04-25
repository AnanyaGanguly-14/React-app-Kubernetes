# React-app-Kubernetes

KubernetesAppDevelopment

BsOva+

eWsUNNfj37nZehb+

QtfZPiJot2aOUA4XRYq9+

ACRDOoGkH

ABC

---------------------------------------------
k8s.gcr.io/ingress-nginx/controller:v1.6.0

F0425 14:27:33.239334       7 main.go:99] No namespace with name default found: namespaces "default" is forbidden: User "system:serviceaccount:ingress-nginx:nginx-ingress-serviceaccount" cannot get resource "namespaces" in API group "" in the namespace "default"

apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  name: nginx-ingress-clusterrole
rules:
  - apiGroups: [""]
    resources: ["configmaps", "endpoints", "nodes", "pods", "secrets", "services", "namespaces"]  # <-- Added namespaces resource here
    verbs: ["get", "list", "watch"]
  - apiGroups: ["networking.k8s.io"]
    resources: ["ingresses", "ingressclasses"]
    verbs: ["get", "list", "watch"]
  - apiGroups: ["networking.k8s.io"]
    resources: ["ingresses/status"]
    verbs: ["update"]
  - apiGroups: ["coordination.k8s.io"]
    resources: ["leases"]
    verbs: ["get", "watch", "list", "delete", "update", "create"]
