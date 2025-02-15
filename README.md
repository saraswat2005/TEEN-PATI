# Betting App (Turborepo) 🎲🎮📊

**Betting App** is a monorepo built with Turborepo. This project mimics the features of Parimatch, including: 🎯💰📈

- **Sports Betting**: Place bets on live and upcoming sports events.
- **Live Casino**: Interactive and engaging live casino games.
- **Instant Games**: Quick and exciting games for instant rewards.

This repository uses a **modular architecture**, consisting of apps and packages to separate concerns and encourage code reusability. 🔧📦💡

## Project Structure 🏗️📂✨

### **Apps**

- **`client`**: The user-facing interface for customers.
- **`admin`**: The admin panel for managing events, games, and users.

### **Packages**

- **`db`**: A shared package for database interactions using Prisma ORM and MongoDB (cloud database). 📚💾☁️

## Prerequisites ✅💻🔍

Make sure you have the following installed on your machine: 🛠️📋🔑

- **Node.js** (v16 or higher)
- **npm** (v8 or higher) or **yarn**
- **Turborepo CLI** (optional, can be installed globally):
  ```bash
  npm install -g turbo
  ```
- Access to a **MongoDB Cloud Database**

## Installation ⚙️📥🚀

### 1. Clone the Repository 🌐📁🔗

```bash
git clone https://github.com/KrishnaTiwariCoder/betting-app.git
cd betting-app
```

### 2. Install Dependencies 📦📌✅

This will install dependencies for all apps and packages in the monorepo.

```bash
yarn install
```

### 3. Set Up Environment Variables 🌍🔑📄

Create `.env` files in the root directory, `apps/client`, `apps/admin`, and `packages/db`.

#### Example `.env` for `packages/db`:

```env
DATABASE_URL="your-mongodb-connection-string"
```

Ensure that the `DATABASE_URL` in `packages/db/.env` points to your MongoDB cloud instance. 🛡️💾📡

### 4. Generate Prisma Client 🔄🖋️📊

Navigate to the `packages/db` directory and run:

```bash
npx prisma generate
```

This command will generate the Prisma client for database interactions. 🚀📘🔍

### 5. Seed the Database (Optional) 🌱📊💾

To seed the database with initial data, run the following:

```bash
cd packages/db
yarn seed
```

## Development 💻⚡🚧

### Running the Apps 🏃‍♀️💡📱

To run the apps during development, use the following commands:

#### Start Client

```bash
turbo run dev --filter=client
```

This will start the client-side app (usually accessible at `http://localhost:3000`). 🎨🖥️📡

#### Start Admin

```bash
turbo run dev --filter=admin
```

This will start the admin panel app (usually accessible at `http://localhost:3001`). 🛠️🖥️📡

### Running All Apps Simultaneously 🔄📱🛠️

You can use Turborepo to run all apps at once:

```bash
turbo run dev
```

## Build 🏗️📦🚀

To build the apps and packages for production:

```bash
turbo run build
```

The build artifacts will be output to each app's respective `dist/` directory. 🎯📤✨

## Testing ✅🧪📊

To run tests across all apps and packages:

```bash
turbo run test
```

## Deployment 🚀🌐📤

Each app can be deployed individually. For example: 🛠️📡🔑

### Deploying Client

```bash
cd apps/client
yarn build
yarn start
```

### Deploying Admin

```bash
cd apps/admin
yarn build
yarn start
```

## Key Features 🌟📚💼

- **Centralized Database Management**: Shared `db` package using Prisma ORM with MongoDB.
- **Scalable Architecture**: Built with Turborepo for optimized development and builds.
- **Customizable and Extendable**: Modular design to add or modify features easily. 💡⚙️✨

## Contributing 🤝💻📈

We welcome contributions to the project! If you want to contribute:

1. Fork the repository.
2. Create a new branch.
3. Make your changes and commit them.
4. Push your changes and create a pull request. 🔧📊📤

## License 📝⚖️✅

This project is licensed under the [MIT License](LICENSE). 📚📜💡

---

If you have any questions or issues, feel free to reach out to the maintainers. 🙋‍♀️📩📞
