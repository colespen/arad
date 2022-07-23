from enum import Enum
from uuid import UUID

from pydantic import BaseModel

from common.datatypes.response import Role, User


class AuthenticationRequest(BaseModel):
    email: str
    passphrase: str


class RegisterRequest(AuthenticationRequest):
    pass


class LoginRequest(AuthenticationRequest):
    pass


class LogoutRequest(BaseModel):
    refresh_token: str


class TokenRequest(BaseModel):
    refresh_token: str
    scope: Role


class RoleAction(Enum):
    ASSIGN = "ASSIGN"
    REVOKE = "REVOKE"


class RoleRequest(BaseModel):
    user_id: UUID
    role: Role
    action: RoleAction