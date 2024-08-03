// supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xgcbvqczialixwicildn.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhnY2J2cWN6aWFsaXh3aWNpbGRuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI2MTcyNjUsImV4cCI6MjAzODE5MzI2NX0.uQd0mqB70mk_-o92u9PIZDNcHkmgL4HMxZr_Kggc2uw';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;


// CdiNation2024Inc