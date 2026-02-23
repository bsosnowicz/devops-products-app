# DevOps Products API

Prosta aplikacja webowa (REST API) zbudowana z Express.js jako projekt DevOps demonstracyjny.

## Opis projektu

Aplikacja udostępnia API do zarządzania listą produktów. Projekt demonstruje:
- Pipeline CI/CD z GitHub Actions
- Automatyczny deploy na Azure App Service
- Testy jednostkowe z Jest + Supertest
- Zarządzanie backlogiem w GitHub Projects

## Endpointy

| Metoda | Ścieżka | Opis |
|--------|---------|------|
| GET | `/` | Informacje o API |
| GET | `/products` | Lista wszystkich produktów |
| GET | `/products/:id` | Szczegóły produktu |

## Instrukcja uruchomienia

### Wymagania
- Node.js 18+ (LTS)
- npm

### Instalacja i uruchomienie

\```bash
# Sklonuj repozytorium
git clone https://github.com/TWOJ-USERNAME/devops-products-app.git
cd devops-products-app

# Zainstaluj zależności
npm install

# Uruchom aplikację
npm start
# Aplikacja dostępna na http://localhost:3000
\```

### Uruchomienie testów

\```bash
npm test
\```

## Technologie

- **Runtime:** Node.js
- **Framework:** Express.js
- **Testy:** Jest + Supertest
- **CI/CD:** GitHub Actions
- **Hosting:** Azure App Service

## Pipeline

- **CI:** Automatyczny build i testy na każdym Pull Requeście
- **CD:** Automatyczny deploy do Azure po merge do main


## Konteneryzacja (docker)
- Budowanie obrazu
# docker build -t devops-products-app .
- Uruchomienie kontenerów
# docker-compose up -d