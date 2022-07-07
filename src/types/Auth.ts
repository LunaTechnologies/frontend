interface Tokens {
  accessToken: string;
  refreshToken: string;
}

interface Registration {
  userName: string;
  email: string;
  password: string;
  role: string;
}

interface Login {
  email: string;
  password: string;
}

export type { Tokens, Registration, Login };
