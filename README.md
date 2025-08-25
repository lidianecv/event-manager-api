
# 🎉 Event Management API

## 📖 Sobre o Projeto
A **Event Management API** é um serviço backend RESTful construído com **NestJS**.  
Ela permite que usuários criem e gerenciem eventos, confirmem presença (RSVP) e visualizem participantes.  

Este projeto vai lhe proporcionar experiência em:
- Construir **APIs REST** em NestJS.  
- Projetar e trabalhar com **bancos de dados relacionais**.  
- Implementar **autenticação e autorização** (JWT).  
- Lidar com **relacionamentos muitos-para-muitos** (events ↔ attendees).  
- Adicionar **filtros, paginação e validações**.  

---

## 🎯 Objetivo
O objetivo deste projeto é simular uma **API de plataforma de eventos do mundo real**.  
Os usuários devem ser capazes de:
- Criar e atualizar eventos.  
- Confirmar presença (RSVP) em eventos.  
- Visualizar participantes e detalhes de eventos.  
- Gerenciar seus próprios dados de forma segura.  

---

## 📂 Entidades & Modelo de Dados

### 1. **User**
Representa pessoas que usam a plataforma.  
- `id` (UUID, PK)  
- `name` (string)  
- `email` (string, único)  
- `password` (string com hash)  
- `role` (`'user' | 'admin'`)  
- `createdAt` (timestamp)  

### 2. **Event**
Representa eventos criados por usuários.  
- `id` (UUID, PK)  
- `title` (string)  
- `description` (text)  
- `location` (string)  
- `date` (datetime)  
- `isPublic` (boolean, default `true`)  
- `createdBy` (FK → User)  
- `createdAt` (timestamp)  

### 3. **Attendee (RSVP)**
Representa o status de presença de um usuário em um evento.  
- `id` (UUID, PK)  
- `userId` (FK → User)  
- `eventId` (FK → Event)  
- `status` (`'going' | 'interested' | 'declined'`)  
- `createdAt` (timestamp)  

---

## 🌐 Endpoints da API

### 🔑 Auth
- `POST /auth/register` → Registrar novo usuário  
- `POST /auth/login` → Login & obter JWT  

---

### 👤 Users
- `GET /users/me` → Obter perfil do usuário logado  
- `GET /users/:id` → Obter perfil público de um usuário (eventos criados, participando)  

---

### 🎉 Events
- `POST /events` → Criar evento (auth necessário)  
- `GET /events` → Listar eventos  
  - Filtros: `date`, `location`, `isPublic`, `createdBy`  
  - Paginação: `?page=1&limit=10`  
- `GET /events/:id` → Detalhes de um evento (apenas se público OU dono OU participante)  
- `PATCH /events/:id` → Atualizar evento (somente dono/admin)  
- `DELETE /events/:id` → Deletar evento (somente dono/admin)  

---

### 🙋 Attendees / RSVPs
- `POST /events/:id/rsvp` → Confirmar presença em evento (`status` = going/interested/declined)  
- `GET /events/:id/attendees` → Listar participantes de um evento  
- `PATCH /rsvps/:id` → Atualizar RSVP (alterar status)  
- `DELETE /rsvps/:id` → Cancelar RSVP  

---

## 🛠️ Tecnologias & Requisitos
- **NestJS** (REST controllers, services, modules).  
- **PostgreSQL** com **TypeORM/Prisma**.  
- **Auth**: JWT com Passport.  
- **Validação**: `class-validator`.  
- **Documentação**: Swagger (`@nestjs/swagger`).  
- **Bônus**: Implementar controle de acesso por roles (admin pode deletar qualquer evento).  

---

## 🚀 Funcionalidades Extras (Opcional)
- Upload de imagem do evento (S3/Cloudinary).  
- Envio de e-mail de notificação em RSVP.  
- Endpoint de busca (`/events/search?query=music`).  
- Usuário pode “seguir” outros usuários e ver seus eventos.  

---

## ✅ O que Você Vai Aprender
Ao concluir este projeto, você vai ganhar experiência prática em:  
- **Construir APIs REST seguras** no NestJS.  
- **Modelagem de banco de dados** (relacionamentos one-to-many & many-to-many).  
- **Autenticação e autorização** (JWT, roles).  
- **Paginação, filtros e busca**.  
- **Documentação de APIs** com Swagger.  
