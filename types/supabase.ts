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
          id: number
          locale: string | null
          payment_id: string | null
          type: string | null
        }
        Insert: {
          amount?: number | null
          created_at?: string | null
          id?: number
          locale?: string | null
          payment_id?: string | null
          type?: string | null
        }
        Update: {
          amount?: number | null
          created_at?: string | null
          id?: number
          locale?: string | null
          payment_id?: string | null
          type?: string | null
        }
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
