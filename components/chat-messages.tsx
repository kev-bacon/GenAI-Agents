"use client"

import { Companion } from "@prisma/client"
import { ChatMessage } from "./chat-message"

interface ChatMessagesProps {
    messages: any[]
    isLoading: boolean
    companion: Companion
    
}

export const ChatMessages = ({
    messages = [],
    isLoading,
    companion
}: ChatMessagesProps) => {
    return (
        <div className="flex-1 overflow-y-auto pr-4">
            <ChatMessage 
            src={companion.src}
            role="system"
            content={`Hello, I am ${companion.name}, ${companion.description}`}
            /> 
        </div>
    )
}