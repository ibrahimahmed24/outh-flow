# 🛍️ E-Commerce API - Auth Flow

A **full-featured E-commerce REST API** built with **NestJS**, **Prisma ORM**, and **PostgreSQL**. This project includes complete authentication, role-based access control, product management, shopping cart, orders, and Stripe payment integration.

---

## 📋 Table of Contents

- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Features](#features)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Database Setup](#database-setup)
- [API Documentation](#api-documentation)
- [Authentication & Authorization](#authentication--authorization)
- [API Endpoints](#api-endpoints)
- [Docker Setup](#docker-setup)
- [Development](#development)
- [Testing](#testing)

---

## 🧱 Tech Stack

- **Backend Framework**: [NestJS](https://nestjs.com/) - Progressive Node.js framework
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Database**: [PostgreSQL](https://www.postgresql.org/)
- **ORM**: [Prisma](https://www.prisma.io/)
- **Authentication**: JWT (JSON Web Tokens)
- **Password Hashing**: bcrypt
- **Email Service**: Nodemailer with Handlebars templates
- **Payment**: [Stripe](https://stripe.com/)
- **API Documentation**: Swagger/OpenAPI
- **Containerization**: Docker & Docker Compose
- **Code Quality**: ESLint, Prettier

---

## 📁 Project Structure

```
E-Commerce API/
├── src/
│   ├── auth/                    # Authentication module
│   │   ├── auth.controller.ts
│   │   ├── auth.service.ts
│   │   ├── auth.module.ts
│   │   ├── strategies/
│   │   │   └── jwt.strategy.ts
│   │   └── dto/
│   │       ├── register.dto.ts
│   │       ├── lgin.dto.ts
│   │       ├── VerifyEmaildto.ts
│   │       ├── Resetpssword.dto.ts
│   │       ├── resetpassword.dto.ts
│   │       ├── refeshtoken.dto.ts
│   │       ├── logout.dto.ts
│   │       └── resend-verificationemail.dto.ts
│   ├── users/                   # Users module
│   │   ├── users.controller.ts
│   │   ├── users.service.ts
│   │   ├── users.module.ts
│   │   ├── dto/
│   │   │   ├── create-user.dto.ts
│   │   │   └── update-user.dto.ts
│   │   └── entities/
│   ├── product/                 # Products module
│   │   ├── product.controller.ts
│   │   ├── product.service.ts
│   │   ├── product.module.ts
│   │   └── dto/
│   │       ├── create-product.dto.ts
│   │       ├── update-product.dto.ts
│   │       └── filter-product.dto.ts
│   ├── category/                # Categories module
│   │   ├── category.controller.ts
│   │   ├── category.service.ts
│   │   ├── category.module.ts
│   │   └── dto/
│   │       ├── create-product.dto.ts
│   │       └── update-product.dto.ts
│   ├── cart/                    # Cart module
│   │   ├── cart.controller.ts
│   │   ├── cart.service.ts
│   │   ├── cart.module.ts
│   │   └── dto/
│   │       ├── add-to-cart.dto.ts
│   │       ├── update-quantity.dto.ts
│   │       └── remove-from-cart.dto.ts
│   ├── order/                   # Orders module
│   │   ├── order.controller.ts
│   │   ├── order.service.ts
│   │   ├── order.module.ts
│   │   └── dto/
│   │       ├── create-order.dto.ts
│   │       └── update-order-status.dto.ts
│   ├── payments/                # Payments module (Stripe)
│   │   ├── payments.controller.ts
│   │   ├── payments.service.ts
│   │   ├── payments.module.ts
│   │   └── dto/
│   │       ├── create-payment.dto.ts
│   │       └── refund-payment.dto.ts
│   ├── wishlis/                 # Wishlist module
│   │   ├── wishlis.controller.ts
│   │   ├── wishlis.service.ts
│   │   └── wishlis.module.ts
│   ├── mail/                    # Email service
│   │   ├── mail.service.ts
│   │   └── mail.module.ts
│   ├── tokens/                  # Token services
│   │   └── verification-token.service.ts
│   ├── decorators/              # Custom decorators
│   │   ├── GetUser.Decorator.ts
│   │   └── roles.decorator.ts
│   ├── gards/                   # Authentication guards
│   │   ├── jwt-aoth.gards.guard.ts
│   │   └── roles.guard.ts
│   ├── prisma/                  # Prisma service
│   │   └── prisma.service.ts
│   ├── templates/               # Email templates
│   │   └── mail/
│   │       ├── email-verification.hbs
│   │       └── reset-password.hbs
│   ├── app.module.ts
│   ├── app.controller.ts
│   ├── app.service.ts
│   └── main.ts
├── prisma/
│   ├── schema.prisma            # Database schema
│   ├── seed.ts                  # Seed file
│   └── migrations/              # Database migrations
├── test/
│   └── app.e2e-spec.ts
├── .env                         # Environment variables
├── .env.example                 # Example environment
├── docker-compose.yml
├── docker-compose.dev.yml
├── docker-compose.prod.yml
├── dockerfile
├── package.json
├── tsconfig.json
├── nest-cli.json
├── eslint.config.mjs
└── README.md
```

---

## ✨ Features

### 🔐 Authentication & Authorization
- ✅ User registration with email verification
- ✅ Login with JWT access & refresh tokens
- ✅ Email verification (OTP-based)
- ✅ Forgot password & password reset
- ✅ Token refresh mechanism
- ✅ Logout functionality
- ✅ Role-Based Access Control (RBAC)
  - **Admin** role for managing products/categories
  - **User** role for shopping

### 👥 User Management
- ✅ User profile management
- ✅ User registration & authentication
- ✅ Email verification system
- ✅ Password reset via email

### 🛒 E-Commerce Features

#### Products
- ✅ Create, read, update, delete products (Admin only)
- ✅ Product filtering by category, price range, search
- ✅ Product pagination
- ✅ Stock management

#### Categories
- ✅ Create, read, update, delete categories (Admin only)
- ✅ Associate products with categories

#### Shopping Cart
- ✅ Add products to cart
- ✅ Update item quantities
- ✅ Remove items from cart
- ✅ View cart
- ✅ Clear cart

#### Orders
- ✅ Create order from cart
- ✅ View user orders
- ✅ View order details with items
- ✅ Order status tracking (PENDING, COMPLETED, CANCELLED)
- ✅ Automatic stock management

#### Wishlist
- ✅ Add products to wishlist
- ✅ Remove from wishlist
- ✅ View wishlist items

### 💳 Payment Processing
- ✅ Stripe integration
- ✅ Create checkout sessions
- ✅ Webhook handling for payment confirmation
- ✅ Refund functionality
- ✅ Payment status tracking (PAID, FAILED, REFUNDED)

### 📧 Email Service
- ✅ Email verification on registration
- ✅ Password reset emails
- ✅ Handlebars email templates
- ✅ SMTP configuration via environment variables

### 📚 API Documentation
- ✅ Swagger/OpenAPI integration
- ✅ Automatic endpoint documentation
- ✅ Bearer token authentication in Swagger UI

---

## 📦 Installation

### Prerequisites
- Node.js (v18+)
- npm or pnpm
- PostgreSQL (v12+)
- Docker & Docker Compose (optional)
- Stripe account

### Step 1: Clone the Repository

```bash
git clone https://github.com/yourusername/aoth-flow.git
cd aoth-flow
```

### Step 2: Install Dependencies

```bash
npm install
# or
pnpm install
```

### Step 3: Setup Environment Variables

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

### Step 4: Initialize Database

```bash
npx prisma migrate dev
```

### Step 5: Start the Application

```bash
npm run start:dev
```

The API will be available at `http://localhost:3000`  
Swagger docs at `http://localhost:3000/api/docs`

---

## 🔧 Environment Variables

Create a `.env` file with the following variables:

```env
# Application
PORT=3000
NODE_ENV=development

# Database
DATABASE_URL=postgresql://user:password@localhost:5432/aoth_db

# JWT
JWT_SECRET=your-secret-key-here-min-32-characters
JWT_EXPIRATION=1h
EXPIRESIN=1h
REFRESH_TOKEN_EXPIRATION_DAYS=7

# Email Service
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USER=your-email@gmail.com
MAIL_PASSWORD=your-app-password
MAIL_SECURE=false

# Stripe
STRIPE_SECRET_KEY=sk_test_your_stripe_key

# Token Expiration
VERIFICATION_TOKEN_EXPIRES_IN_TIME=10
```

---

## 🗄️ Database Setup

### Using Docker

```bash
docker-compose up -d
```

This will start PostgreSQL container.

### Prisma Migrations

```bash
# Run pending migrations
npx prisma migrate dev

# View database in Prisma Studio
npx prisma studio

# Reset database (development only)
npx prisma migrate reset
```

---

## 📖 API Documentation

Once the server is running, open your browser and navigate to:

```
http://localhost:3000/api/docs
```

Swagger UI will display all available endpoints with:
- Request/response examples
- Parameter descriptions
- Authentication requirements
- Status codes

---

## 🔐 Authentication & Authorization

### JWT Flow

1. **Register**: Create a new user account with email verification
2. **Verify Email**: Use the OTP sent to email
3. **Login**: Receive `accessToken` and `refreshToken`
4. **Access API**: Include `Authorization: Bearer <accessToken>` header
5. **Refresh Token**: Use `refreshToken` to get new `accessToken`

### Roles & Permissions

| Endpoint | Role | Action |
|----------|------|--------|
| `POST /products` | ADMIN | Create product |
| `PATCH /products/:id` | ADMIN | Update product |
| `DELETE /products/:id` | ADMIN | Delete product |
| `GET /products` | USER, ADMIN | View products |
| `POST /cart/add` | USER | Add to cart |
| `GET /orders` | USER | View own orders |
| `GET /orders/:id` | USER | View order details |

---

## 🔌 API Endpoints

### Authentication Routes (`/api/v1/auth`)

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/register` | Register new user |
| POST | `/verify-email` | Verify email with token |
| POST | `/resend-verification-email` | Resend verification email |
| POST | `/login` | Login user |
| POST | `/refresh-token` | Refresh access token |
| POST | `/logout` | Logout user |
| POST | `/forgot-password` | Request password reset |
| POST | `/reset-password` | Reset password |
| GET | `/profile` | Get user profile |

### Products Routes (`/api/products`)

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | `/` | Create product | ADMIN |
| GET | `/` | List products with filters | USER |
| GET | `/:id` | Get product by ID | USER |
| PATCH | `/:id` | Update product | ADMIN |
| DELETE | `/:id` | Delete product | ADMIN |

### Categories Routes (`/api/categories`)

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | `/` | Create category | ADMIN |
| GET | `/` | List categories | USER |
| GET | `/:id` | Get category by ID | USER |
| PATCH | `/:id` | Update category | ADMIN |
| DELETE | `/:id` | Delete category | ADMIN |

### Cart Routes (`/api/cart`)

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | `/add` | Add to cart | USER |
| GET | `/` | Get cart | USER |
| PATCH | `/item/:itemId` | Update quantity | USER |
| DELETE | `/item/:itemId` | Remove item | USER |

### Orders Routes (`/api/orders`)

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | `/` | Create order from cart | USER |
| GET | `/` | Get user orders | USER |
| GET | `/:id` | Get order details | USER |
| DELETE | `/:id` | Cancel order | USER |

### Wishlist Routes (`/api/wishlist`)

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | `/:productId` | Add to wishlist | USER |
| DELETE | `/:productId` | Remove from wishlist | USER |
| GET | `/` | Get wishlist items | USER |

### Payments Routes (`/api/payments`)

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | `/checkout` | Create payment session | USER |
| POST | `/webhook` | Stripe webhook | PUBLIC |
| POST | `/refund` | Refund order | USER |

---

## 🐳 Docker Setup

### Build and Run with Docker

```bash
# Development
docker-compose -f docker-compose.dev.yml up -d

# Production
docker-compose -f docker-compose.prod.yml up -d

# Stop containers
docker-compose down
```

### Docker Compose Files

- **docker-compose.yml**: Default configuration
- **docker-compose.dev.yml**: Development environment
- **docker-compose.prod.yml**: Production environment

---

## 🚀 Development

### Start Development Server

```bash
npm run start:dev
```

Server will restart on file changes.

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm run start
```

### Code Linting

```bash
npm run lint
npm run lint:fix
```

### Format Code

```bash
npm run format
```

---

## 🧪 Testing

### Run Unit Tests

```bash
npm run test
```

### Run E2E Tests

```bash
npm run test:e2e
```

### Test Coverage

```bash
npm run test:cov
```

---

## 📊 Database Schema Highlights

### Key Tables

- **Users**: Store user accounts with roles
- **Products**: E-commerce products with pricing
- **Categories**: Product categories
- **Cart**: Shopping cart items per user
- **Orders**: User orders with status tracking
- **OrderItems**: Products in orders
- **Wishlist**: Saved products
- **Payments**: Payment transaction records
- **RefreshTokens**: Token management
- **VerificationTokens**: Email verification tokens
- **PasswordResetTokens**: Password reset tokens

---

## 🔒 Security Features

✅ Password hashing with bcrypt  
✅ JWT-based authentication  
✅ Role-Based Access Control (RBAC)  
✅ Email verification requirement  
✅ Refresh token rotation  
✅ CORS protection  
✅ Input validation with class-validator  
✅ Error handling & logging  

---

## 📝 Git Workflow

```bash
# Create feature branch
git checkout -b feature/your-feature

# Commit changes
git add .
git commit -m "feat: your feature description"

# Push and create PR
git push origin feature/your-feature
```

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 📞 Support

For support, email your-email@example.com or open an issue on GitHub.

---

## 🙏 Acknowledgments

- NestJS community
- Prisma documentation
- Stripe API documentation
- Contributors

---

**Happy Coding! 🚀**
