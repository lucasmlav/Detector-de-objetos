# 🔎 Detector de Objetos com AI (COCO-SSD v1.0)

## 📘 Visão geral
Aplicação web para detecção de objetos em imagens e webcam, utilizando o modelo COCO-SSD do TensorFlow.js. Permite upload múltiplo, detecção em tempo real, exportação de resultados e interface amigável.Desenvolvido para funcionar de forma totalmente local, este sistema garante privacidade, praticidade e eficiência, sem necessidade de instalação de softwares adicionais.

## 🖥️ Requisitos necessários
Para garantir o funcionamento adequado da aplicação, recomenda-se:

Navegador compatível (Chrome, Firefox, Edge ou Safari)

Conexão com a internet para carregamento do modelo de IA

Memória RAM mínima de 64MB (idealmente 128MB)

Resolução de tela de, no mínimo, 800x600 pixels

## 📂 Instruções de uso
1. Baixe ou clone este repositório;
   
2. Abra o arquivo `index.html` em um navegador moderno (Chrome, Edge, Firefox);
   
3. Para usar a webcam, recomenda-se rodar um servidor local:
   ```sh
   python -m http.server 8000
   ```

## ⚙️ Funcionalidades principais
- Upload de imagens (múltiplas);
  
- Detecção de objetos em imagens e via webcam;
  
- Lista de objetos detectados com confiança;
  
- Salvar imagem com detecções;
  
- Exportar resultados em JSON;

- Histórico de detecções;
  
- Tradução das classes COCO para português;
  
- Interface responsiva.

## 🌉 Estrutura dos Arquivos
```
index.html      # Página principal
app.js          # Lógica de detecção e interface
style.css       # Estilos visuais
README.md       # Este arquivo
```

## 🧩 Tecnologias utilizadas
TensorFlow.js — biblioteca de aprendizado de máquina executada diretamente no navegador;

Modelo COCO-SSD — pré-treinado para detecção de múltiplos objetos com base no conjunto de dados COCO;

Tecnologias web modernas: HTML5, CSS3 e JavaScript.

## 🚨 Limitações conhecidas
Desempenho limitado em máquinas com hardware mais antigo;

Imagens com alta complexidade visual podem comprometer a precisão da detecção;

Objetos com aparência semelhante podem ser erroneamente classificados.

## 🤝 Agradecimentos

À equipe de desenvolvimento do TensorFlow, pela disponibilização de uma biblioteca robusta e acessível;

A todos os usuários que confiam e experimentam esta solução.

## 📜 Créditos e Referências
- [TensorFlow.js COCO-SSD](https://github.com/tensorflow/tfjs-models/tree/master/coco-ssd)
- [COCO Dataset](https://cocodataset.org/#home)

---
Desenvolvido para fins educacionais e demonstração de IA aplicada à visão computacional. 
