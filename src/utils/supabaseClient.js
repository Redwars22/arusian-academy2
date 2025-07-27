// src/utils/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("ERRO: As variáveis de ambiente SUPABASE_URL ou SUPABASE_ANON_KEY não estão definidas.");
  console.warn("Por favor, verifique seu arquivo .env e as configurações de ambiente.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);