import { Role } from "@prisma/client";

export class CreateUserDto {
 
  full_name: string;

  
  phone: string;

  
  email: string;


 
  activationLink: string;

  
  isActivated?: boolean;

  
  isApproved?: boolean;

  
  role?: Role;

  
  refreshToken?: string;
}
