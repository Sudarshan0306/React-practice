output "node_port" {
  value = kubernetes_service.vite_service.spec[0].port[0].node_port
}
