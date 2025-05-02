
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Check } from 'lucide-react';

const SignupForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      toast({
        title: "Cadastro realizado com sucesso!",
        description: "Em breve entraremos em contato sobre o seu acesso beta.",
      });
    }, 1500);
  };

  return (
    <Card className="border border-mint-500/20 bg-dark-500/70 backdrop-blur-lg" id="signup-form">
      <CardHeader>
        <CardTitle className="text-2xl">Garanta seu acesso beta</CardTitle>
        <CardDescription>Vagas limitadas. Seja um dos primeiros a experimentar o GranaHub.</CardDescription>
      </CardHeader>
      <CardContent>
        {success ? (
          <div className="py-8 text-center">
            <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-mint-500/20 mb-4">
              <Check className="h-6 w-6 text-mint-500" />
            </div>
            <h3 className="text-xl font-medium mb-2">Obrigado pelo interesse!</h3>
            <p className="text-gray-400">
              Seu acesso à versão beta será enviado em breve para {email}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <label htmlFor="name" className="text-sm">
                  Nome completo
                </label>
                <Input
                  id="name"
                  placeholder="Seu nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="bg-dark-400 border-mint-500/20"
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="email" className="text-sm">
                  E-mail profissional
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-dark-400 border-mint-500/20"
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="company" className="text-sm">
                  Empresa (opcional)
                </label>
                <Input
                  id="company"
                  placeholder="Nome da sua empresa"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="bg-dark-400 border-mint-500/20"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-mint-500 hover:bg-mint-600 mt-2"
                disabled={loading}
              >
                {loading ? "Processando..." : "Quero participar do beta"}
              </Button>
            </div>
          </form>
        )}
      </CardContent>
      <CardFooter className="flex justify-center border-t border-mint-500/10 pt-4">
        <p className="text-xs text-gray-400 text-center">
          Ao se cadastrar, você concorda com nossos <a href="#" className="text-mint-400 hover:underline">Termos de Serviço</a> e <a href="#" className="text-mint-400 hover:underline">Política de Privacidade</a>
        </p>
      </CardFooter>
    </Card>
  );
};

export default SignupForm;
