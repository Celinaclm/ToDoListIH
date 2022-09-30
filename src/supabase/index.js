import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://hjubrijvvxqgtrnshdno.supabase.co';
const supabaseAnonToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhqdWJyaWp2dnhxZ3RybnNoZG5vIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQ0OTU3MzYsImV4cCI6MTk4MDA3MTczNn0.I9czQ6kmKbd16T3Jr3yJL7pCn1G33fappv6C6ZDJnyA';

export default createClient(supabaseUrl, supabaseAnonToken); 