export interface Address {
  first_name: string | null;
  last_name: string | null;
  street: string | null;
  city: string | null;
  region: string | null;
  postal_code: string | null;
  country: string | null;
}

export interface CreateUserDto {
  email_address: string | null;
  phone_number: string | null;
  address: Address | null;
}