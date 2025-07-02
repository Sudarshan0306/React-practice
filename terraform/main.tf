resource "kubernetes_deployment" "vite_app" {
  metadata {
    name = var.app_name
    labels = {
      app = var.app_name
    }
  }

  spec {
    replicas = 2

    selector {
      match_labels = {
        app = var.app_name
      }
    }

    template {
      metadata {
        labels = {
          app = var.app_name
        }
      }

      spec {
        container {
          image = var.image
          name  = var.app_name
          port {
            container_port = 80
          }
        }
      }
    }
  }
}

resource "kubernetes_service" "vite_service" {
  metadata {
    name = "${var.app_name}-svc"
  }

  spec {
    selector = {
      app = var.app_name
    }

    port {
      port        = 80
      target_port = 80
    }

    type = "NodePort"
  }
}
