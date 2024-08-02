// supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://pgqmehfnrrgjkwqokkuh.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBncW1laGZucnJnamt3cW9ra3VoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI2MDk0MzksImV4cCI6MjAzODE4NTQzOX0.jnmOIF46JkrLyHrOx7YzAW6mQqjfIuegODw33n2Iqsc';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
