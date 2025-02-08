from pydantic import BaseModel
from typing import List

class UserPreferences(BaseModel):
    preferences: List[int] 