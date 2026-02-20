'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export function ContactForm() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Card className="w-full">
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">{t('contact.form.name')}</Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder={t('contact.form.namePlaceholder')}
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">{t('contact.form.email')}</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder={t('contact.form.emailPlaceholder')}
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">{t('contact.form.message')}</Label>
            <Textarea
              id="message"
              name="message"
              placeholder={t('contact.form.messagePlaceholder')}
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              required
            />
          </div>

          <Button type="submit" className="w-full">
            {t('contact.form.submit')}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
