# React-app-Kubernetes

KubernetesAppDevelopment

BsOva+

eWsUNNfj37nZehb+

QtfZPiJot2aOUA4XRYq9+

ACRDOoGkH

ABC

---------------------------------------------
k8s.gcr.io/ingress-nginx/controller:v1.6.0

Helm install
--------------
winget install Helm.Helm
 
Login to cluster
----------------
az aks get-credentials --resource-group Kuberenetes_RG --name KubeClusterForDev1 --overwrite-existing

helm add
----------------
helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx

helm install
----------------
helm install nginx-ingress ingress-nginx/ingress-nginx --namespace ingress-basic --create-namespace

helm get ns
-----------------------
kubectl get ns
