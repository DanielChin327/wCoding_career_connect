from app import db
from datetime import datetime
import pytz

class User(db.Model):
    __tablename__ = "users"
    
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    username = db.Column(db.String(50), nullable=False, unique=True)
    email = db.Column(db.String(100), nullable=False, unique=True)
    password = db.Column(db.String(255), nullable=False)
    full_name = db.Column(db.String(100), nullable=True)
    profile_picture = db.Column(db.String(255), nullable=True)
    
    # Set timezone to KST (Korean Standard Time)
    kst = pytz.timezone('Asia/Seoul')
    
    created_at = db.Column(db.DateTime, default=lambda: datetime.now(kst))
    updated_at = db.Column(db.DateTime, default=lambda: datetime.now(kst), onupdate=lambda: datetime.now(kst))
    
    def to_json(self):
        return {
            "id": self.id,
            "username": self.username,
            "email": self.email,
            "full_name": self.full_name,
            "profile_picture": self.profile_picture,
            "created_at": self.created_at.isoformat(),
            "updated_at": self.updated_at.isoformat(),
        }