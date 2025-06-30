# 🌦 WeatherApp

A containerized weather application deployed using a CI/CD pipeline with **GitHub Actions**, **Docker Hub**, and **Amazon EKS**.

This project demonstrates:

- Docker image builds with version tagging
- Automated CI/CD triggered by GitHub Releases
- Secure deployment to an EKS cluster using Kubernetes manifests
- Secret management using Kubernetes Secrets

---

Setup Github secretes

DOCKER_USERNAME	Docker Hub username
DOCKER_PASSWORD	Docker Hub password or token

---

CI/CD with GitHub Actions
Triggering the pipeline:

    Push code changes

    Go to the Releases tab

    Click "Draft a new release"

    Provide a version tag (e.g. v1.0.0) and publish

This will:

    Build the Docker image

    Tag it using the release version

    Push it to Docker Hub

