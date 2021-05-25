# E_Learning
A aplicação é voltada para educação, que oferece cursos de diversas áreas de conhecimento com um conteúdo em formato de videoaulas.

# Criando usuário:
<a href="#"><img alt="Hugo Mendonça Dev" src="https://img.shields.io/badge/%2FUSER-POST-brightgreen"/></a>


**Exemplo de entrada de dados (JSON):**
```
{
  "name": "Hugo Mendonça",
  "email": "hugomendonca@example.com",
  "password": "12345"
}
```
**Exemplo de saída de dados esperada (JSON):**
```
{
  "id": "b311bb51-75f2-4d15-a905-89bedb01e351",
  "name": "Hugo Mendonça",
  "email": "hugomendonca@example.com",
  "created_at": "2021-05-24T19:54:11.000Z",
  "updated_at": "2021-05-24T19:54:11.000Z"
}
```

# Autenticando usuário:
<a href="#"><img alt="Hugo Mendonça Dev" src="https://img.shields.io/badge/%2FSESSION-POST-brightgreen"/></a>

**Exemplo de entrada de dados (JSON):**
```
{
  "email": "hugomendonca@example.com",
  "password": "12345"
}
```

**Exemplo de saída de dados esperada (JSON):**
```
{
  "user": {
    "id": "a853cff8-6749-4bb4-a7aa-fcbbc885aac9",
    "name": "Hugo Mendonça",
    "email": "hugomendonca@example.com",
    "created_at": "2021-05-10T04:51:54.000Z",
    "updated_at": "2021-05-10T04:51:54.000Z"
  },
  "token": "token-generated"
}
```
# Criando um novo curso:
<a href="#"><img alt="Hugo Mendonça Dev" src="https://img.shields.io/badge/%2FCOURSES-POST-brightgreen"/></a>

**Exemplo de entrada de dados (JSON):**
```
{
  "name": "Curso de typescript completo",
  "image": "https://image-url-example.jpg"
}
```

**Exemplo de saída de dados esperada (JSON):**
```
{
  "name": "Curso de typescript completo",
  "image": "https://image-url-example.jpg",
  "id": "875a031e-6e83-49af-9f8b-e65cdd3d7bd2",
  "created_at": "2021-05-23T16:45:07.000Z",
  "updated_at": "2021-05-23T16:45:07.000Z"
}
```

# Atualizando um curso:
<a href="#"><img alt="Hugo Mendonça Dev" src="https://img.shields.io/badge/%2FCOURSES:ID-PUT-important"/></a>

**Exemplo de entrada de dados (JSON):**
```
{
  "name": "New title",
  "image": "http://www.new-image.jpg"
}
```

**Exemplo de saída de dados esperada (JSON):**
```
{
  "id": "7da07065-7c20-4c25-95eb-e45e4e01d657",
  "name": "New title",
  "image": "http://www.new-image.jpg",
  "created_at": "2021-05-16T16:48:52.000Z",
  "updated_at": "2021-05-22T00:45:33.000Z"
}
```

# Listando todos os cursos:
<a href="#"><img alt="Hugo Mendonça Dev" src="https://img.shields.io/badge/%2FCOURSES-GET-blueviolet"/></a>


**Exemplo de saída de dados esperada (JSON):**
```
[
  {
    "id": "875a031e-6e83-49af-9f8b-e65cdd3d7bd2",
    "name": "Curso de typescript completo",
    "image": "http://www.new-image.jpg",
    "created_at": "2021-05-23T16:45:07.000Z",
    "updated_at": "2021-05-23T16:45:07.000Z"
  }
]
```

# Criando uma aula de um determinado curso:
<a href="#"><img alt="Hugo Mendonça Dev" src="https://img.shields.io/badge/%2FLESSON-POST-brightgreen"/></a>


**Exemplo de entrada de dados esperada (JSON):**
```
{
  "name": "Aula 03",
  "duration": 30,
  "description": "Configurando e usando o webpack",
  "course_id": "875a031e-6e83-49af-9f8b-e65cdd3d7bd2",
  "video_id": "tXTS0wQkZio"
}
```

**Exemplo de saída de dados esperada (JSON):**
```
{
  "name": "Aula 03",
  "duration": 30,
  "course_id": "875a031e-6e83-49af-9f8b-e65cdd3d7bd2",
  "description": "Configurando e usando o webpack",
  "video_id": "tXTS0wQkZio",
  "id": "5a8482a5-0fc8-41d2-8a69-d81f8b23b8c3",
  "created_at": "2021-05-24T17:43:20.000Z",
  "updated_at": "2021-05-24T17:43:20.000Z"
}
```

# Listando todas as aulas de um determinado curso:
<a href="#"><img alt="Hugo Mendonça Dev" src="https://img.shields.io/badge/%2FLESSON:ID/LESSONS-GET-blueviolet"/></a>

**Exemplo de saída de dados esperada (JSON):**
```
[
  {
    "id": "6b620742-5c76-440c-b1e8-fdd30f023c39",
    "name": "Aula 01",
    "duration": 30,
    "course_id": "875a031e-6e83-49af-9f8b-e65cdd3d7bd2",
    "description": "Configurando e usando o webpack",
    "video_id": "tXTS0wQkZio",
    "created_at": "2021-05-23T16:45:21.000Z",
    "updated_at": "2021-05-23T16:45:21.000Z",
    "course": {
      "id": "875a031e-6e83-49af-9f8b-e65cdd3d7bd2",
      "name": "Curso de typescript completo 2021",
      "image": "https://new-image.jpg",
      "created_at": "2021-05-23T16:45:07.000Z",
      "updated_at": "2021-05-23T16:45:07.000Z"
    }
  }
]
```
