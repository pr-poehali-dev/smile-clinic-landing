import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Index = () => {
  const services = [
    {
      title: "Лечение проблемной кожи",
      description: "Акне, воспаления, постакне — подбор комплексного ухода и процедур.",
      icon: "Sparkles"
    },
    {
      title: "Удаление папиллом, родинок и новообразований",
      description: "Безопасно, аккуратно, с рекомендациями по уходу после процедуры.",
      icon: "Droplet"
    },
    {
      title: "Инъекционная косметология",
      description: "Процедуры для увлажнения, тонуса и коррекции возрастных изменений.",
      icon: "Syringe"
    },
    {
      title: "Контурная пластика лица и тела",
      description: "Коррекция объёма и форм, гармонизация черт.",
      icon: "Scan"
    },
    {
      title: "Передовые нитевые технологии",
      description: "Лифтинг-эффект и укрепление каркаса кожи (по показаниям).",
      icon: "Waves"
    },
    {
      title: "Все виды уходовых процедур",
      description: "Очищение, увлажнение, питание, восстановление, сезонные программы.",
      icon: "Heart"
    },
    {
      title: "Инновационная аппаратная косметология",
      description: "Работа с качеством кожи, тонусом, рельефом и контуром.",
      icon: "Zap"
    },
    {
      title: "Аппаратный массаж лица и тела",
      description: "Улучшение микроциркуляции, лимфодренаж, тонус и рельеф.",
      icon: "Activity"
    }
  ];

  const benefits = [
    {
      icon: "Award",
      title: "Сертифицированные специалисты",
      description: "Врачи с медицинским образованием и многолетним опытом"
    },
    {
      icon: "Shield",
      title: "Безопасность и стерильность",
      description: "Соблюдение всех норм санитарии и гигиены"
    },
    {
      icon: "Sparkles",
      title: "Современное оборудование",
      description: "Используем передовые технологии и препараты"
    },
    {
      icon: "Users",
      title: "Индивидуальный подход",
      description: "Персональный план процедур для каждого пациента"
    },
    {
      icon: "MapPin",
      title: "Удобное расположение",
      description: "В центре Находки, рядом с остановками транспорта"
    },
    {
      icon: "MessageCircle",
      title: "Честная консультация",
      description: "Расскажем всё как есть, без навязывания лишних процедур"
    }
  ];

  const testimonials = [
    {
      name: "Елена М.",
      text: "Обращалась с проблемой акне. Врач подобрал комплексный уход, и через месяц кожа значительно улучшилась. Очень довольна результатом!",
      rating: 5
    },
    {
      name: "Анна К.",
      text: "Делала контурную пластику губ. Результат естественный, именно то, что хотела. Профессиональный подход и внимательное отношение.",
      rating: 5
    },
    {
      name: "Мария С.",
      text: "Регулярно хожу на уходовые процедуры. Кожа стала более увлажнённой и сияющей. Рекомендую клинику!",
      rating: 5
    },
    {
      name: "Ольга Р.",
      text: "Удаляла родинку. Всё прошло быстро и безболезненно. Дали подробные рекомендации по уходу. Спасибо!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-secondary via-background to-muted">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(201,169,110,0.1),transparent_50%)]" />
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-6 leading-tight">
              Клиника эстетической медицины «Улыбка»
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light">
              Красота и здоровье вашей кожи с заботой о каждой детали
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <a href="https://instagram.com/direct" target="_blank" rel="noopener noreferrer">
                  <Icon name="Instagram" className="mr-2" size={20} />
                  Записаться в Direct
                </a>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-6 border-2 hover:bg-primary/10 transition-all duration-300"
                asChild
              >
                <a href="tel:+79241375075">
                  <Icon name="Phone" className="mr-2" size={20} />
                  +7 924 137-50-75
                </a>
              </Button>
            </div>

            <div className="flex items-center justify-center text-muted-foreground">
              <Icon name="MapPin" className="mr-2" size={20} />
              <span className="text-lg">Находка, ул. Ленинская, 3</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background" id="services">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Услуги клиники
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Подберём процедуры под ваш запрос и особенности кожи — безопасно и индивидуально
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="p-6 hover:shadow-lg transition-all duration-300 animate-scale-in border-2 hover:border-primary/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name={service.icon} className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                <Button variant="ghost" className="w-full hover:bg-primary/10" asChild>
                  <a href="https://instagram.com/direct" target="_blank" rel="noopener noreferrer">
                    Записаться
                  </a>
                </Button>
              </Card>
            ))}
          </div>

          <p className="text-sm text-muted-foreground text-center italic">
            * Имеются противопоказания. Необходима консультация специалиста.
          </p>

          <div className="text-center mt-12">
            <Button size="lg" className="px-10 py-6 text-lg shadow-lg" asChild>
              <a href="https://instagram.com/direct" target="_blank" rel="noopener noreferrer">
                Узнать, что подойдёт мне
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30" id="benefits">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Почему выбирают нас
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={benefit.icon} className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-2 text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background" id="doctors">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Наши специалисты
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Команда профессионалов с медицинским образованием и большим опытом
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="aspect-[3/4] bg-muted flex items-center justify-center">
                <div className="text-center p-8">
                  <Icon name="User" size={64} className="text-muted-foreground mx-auto mb-4" />
                  <p className="text-sm text-muted-foreground">
                    Загрузите фото специалиста через редактор
                  </p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-serif font-semibold mb-2">Врач-косметолог</h3>
                <p className="text-muted-foreground mb-2">Стаж работы: 10+ лет</p>
                <p className="text-sm text-muted-foreground">
                  Специализация: инъекционная косметология, контурная пластика
                </p>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="aspect-[3/4] bg-muted flex items-center justify-center">
                <div className="text-center p-8">
                  <Icon name="User" size={64} className="text-muted-foreground mx-auto mb-4" />
                  <p className="text-sm text-muted-foreground">
                    Загрузите фото специалиста через редактор
                  </p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-serif font-semibold mb-2">Врач-дерматолог</h3>
                <p className="text-muted-foreground mb-2">Стаж работы: 8+ лет</p>
                <p className="text-sm text-muted-foreground">
                  Специализация: лечение проблемной кожи, удаление новообразований
                </p>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="aspect-[3/4] bg-muted flex items-center justify-center">
                <div className="text-center p-8">
                  <Icon name="User" size={64} className="text-muted-foreground mx-auto mb-4" />
                  <p className="text-sm text-muted-foreground">
                    Загрузите фото специалиста через редактор
                  </p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-serif font-semibold mb-2">Специалист</h3>
                <p className="text-muted-foreground mb-2">Стаж работы: 5+ лет</p>
                <p className="text-sm text-muted-foreground">
                  Специализация: аппаратная косметология, массаж
                </p>
              </div>
            </Card>
          </div>

          <div className="text-center mt-8 p-6 bg-muted/30 rounded-lg max-w-3xl mx-auto">
            <Icon name="Info" className="text-primary mx-auto mb-3" size={24} />
            <p className="text-muted-foreground">
              <strong>Как добавить фото врачей:</strong> В редакторе poehali.dev наведите на изображение и нажмите на иконку редактирования, затем загрузите фото специалиста
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30" id="testimonials">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Отзывы пациентов
            </h2>
            <p className="text-xl text-muted-foreground">
              Нам доверяют свою красоту и здоровье
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="p-6 hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-primary fill-primary" size={18} />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary/5" id="contact">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
                Запись на консультацию
              </h2>
              <p className="text-xl text-muted-foreground">
                Свяжитесь с нами удобным способом
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
                <Icon name="Instagram" className="text-primary mx-auto mb-4" size={48} />
                <h3 className="text-2xl font-serif font-semibold mb-3">Instagram Direct</h3>
                <p className="text-muted-foreground mb-6">
                  Быстрый способ записаться на приём
                </p>
                <Button size="lg" className="w-full" asChild>
                  <a href="https://instagram.com/direct" target="_blank" rel="noopener noreferrer">
                    Написать в Direct
                  </a>
                </Button>
              </Card>

              <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
                <Icon name="Phone" className="text-primary mx-auto mb-4" size={48} />
                <h3 className="text-2xl font-serif font-semibold mb-3">Позвонить</h3>
                <p className="text-muted-foreground mb-6">
                  Ответим на все ваши вопросы
                </p>
                <Button size="lg" variant="outline" className="w-full border-2" asChild>
                  <a href="tel:+79241375075">
                    +7 924 137-50-75
                  </a>
                </Button>
              </Card>
            </div>

            <Card className="p-8">
              <h3 className="text-2xl font-serif font-semibold mb-6 text-center">
                Или оставьте заявку
              </h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium mb-2">Ваше имя</label>
                  <Input placeholder="Как к вам обращаться?" className="h-12" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Телефон</label>
                  <Input type="tel" placeholder="+7 (___) ___-__-__" className="h-12" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <Textarea 
                    placeholder="Опишите ваш запрос или вопрос" 
                    className="min-h-[120px]"
                  />
                </div>
                <Button size="lg" className="w-full text-lg py-6">
                  Отправить заявку
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с{" "}
                  <Link to="/privacy" className="underline hover:text-primary">
                    политикой конфиденциальности
                  </Link>
                </p>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background" id="location">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Как нас найти
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Адрес</h3>
                  <p className="text-muted-foreground text-lg">
                    г. Находка, ул. Ленинская, 3
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Телефон</h3>
                  <a 
                    href="tel:+79241375075" 
                    className="text-primary text-lg hover:underline"
                  >
                    +7 924 137-50-75
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Clock" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Режим работы</h3>
                  <p className="text-muted-foreground">
                    Пн-Пт: 9:00 - 19:00<br />
                    Сб: 10:00 - 16:00<br />
                    Вс: выходной
                  </p>
                </div>
              </div>

              <Button size="lg" className="w-full sm:w-auto" asChild>
                <a 
                  href="https://yandex.ru/maps/?text=Находка, ул. Ленинская, 3" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Icon name="Navigation" className="mr-2" size={20} />
                  Проложить маршрут
                </a>
              </Button>
            </div>

            <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=132.873800,42.814500&z=16&l=map&pt=132.873800,42.814500,pm2rdm"
                width="100%"
                height="100%"
                frameBorder="0"
                className="w-full h-full"
                title="Карта расположения клиники"
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-4">Клиника «Улыбка»</h3>
              <p className="text-background/80">
                Эстетическая медицина с заботой о вашей красоте
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Контакты</h4>
              <div className="space-y-2 text-background/80">
                <p>г. Находка, ул. Ленинская, 3</p>
                <p>+7 924 137-50-75</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Информация</h4>
              <div className="space-y-2">
                <Link to="/privacy" className="block text-background/80 hover:text-background">
                  Политика конфиденциальности
                </Link>
              </div>
            </div>
          </div>
          
          <div className="border-t border-background/20 pt-8 text-center text-background/60 text-sm">
            <p>© 2025 Клиника эстетической медицины «Улыбка». Все права защищены.</p>
            <p className="mt-2">* Имеются противопоказания. Необходима консультация специалиста.</p>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 md:hidden">
        <Button 
          size="lg" 
          className="rounded-full shadow-2xl w-14 h-14 p-0"
          asChild
        >
          <a href="https://instagram.com/direct" target="_blank" rel="noopener noreferrer">
            <Icon name="Instagram" size={24} />
          </a>
        </Button>
        <Button 
          size="lg" 
          className="rounded-full shadow-2xl w-14 h-14 p-0"
          asChild
        >
          <a href="tel:+79241375075">
            <Icon name="Phone" size={24} />
          </a>
        </Button>
      </div>
    </div>
  );
};

export default Index;
