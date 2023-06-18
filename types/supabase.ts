export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      donations: {
        Row: {
          amount: number | null
          created_at: string | null
          email: string | null
          id: number
          locale: string | null
          name: string | null
          payment_id: string | null
          type: string | null
        }
        Insert: {
          amount?: number | null
          created_at?: string | null
          email?: string | null
          id?: number
          locale?: string | null
          name?: string | null
          payment_id?: string | null
          type?: string | null
        }
        Update: {
          amount?: number | null
          created_at?: string | null
          email?: string | null
          id?: number
          locale?: string | null
          name?: string | null
          payment_id?: string | null
          type?: string | null
        }
        Relationships: []
      }
      friends: {
        Row: {
          created_at: string | null
          id: number
          name: string | null
          order: number | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          name?: string | null
          order?: number | null
        }
        Update: {
          created_at?: string | null
          id?: number
          name?: string | null
          order?: number | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
