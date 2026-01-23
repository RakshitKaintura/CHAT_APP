import React from 'react'
import { useAuthStore } from '../store/useAuthStore.js';

function ChatPage() {
    const{authUser,isLoading,login}=useAuthStore();
  return (
     
    
    <div>
      Chat Page
    </div>
  )
};

export default ChatPage
