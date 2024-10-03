# Portofolia Id
###### [On Going Project]


#### Definisi
Portofolia Id merupakan platform open-source untuk menunjukkan karya terbaik setiap orang. Banyak orang yang ragu, malu, minder, bahkan insecure menunjukkan karyanya. Takut terkesan pamer dan sombong di mata orang lain dan berujung tidak menunjukkan apa-apa. Tujuan utama dari menampilkan karya-karya terbaik kita bukan untuk pamer atau bahkan sombong, tetapi untuk membuka jalan kolaborasi dengan siapa saja. Jalan kolaborasi menjadi kunci keberhasilan suatu project.

#### Tech Stack

##### Server Side
```json
{
    "Language": "TypeScript",
    "Runtime": "NodeJS",
    "Framework": "Express",
    "Database": "PostgresSQL via Supabase",
    "ORM" : "Drizzle",
    "Storage" : "" // undefined yet 
}
```

##### Client Side
```json
{
    "Language": "TypeScript",
    "Runtime": "NodeJS",
    "Framework": "Vite + React",
    "Styling": "TailwindCSS",
    "Miscellaneous": "TanStack"
}
```
#### Install dependencies for each server and client
```json
npm install
```

#### Create your .env file for development
```json
DATABASE_URL="<your-supabase-connection-string>"
DEV_CORS_ORIGIN="<your-client-url>"
VITE_API_URL="<your-server-url>"
```

#### Database Setup
```json
npx drizzle-kit generate
npx drizzle-kit migrate
```


#### Build the application
```json
npm run build
```

#### API Response Structure
```typescript
type ResponseSimple<T> = {

    code: number;
    status: string;
    data: T;
}

export type ResponsePagination<T> = {

    code: number;
    status: string;
    data: Array<T>;
    pagination: {
        page: number;
        total_page: number;
        size: number;
    }
}

export type ErrorResponse<T=null> = {

    code: number;
    status: string;
    message: string;
    data? : T;

}
```

Ingin kolaborasi lebih lanjut? Kontak saya via Email.
Terimakasih.

---