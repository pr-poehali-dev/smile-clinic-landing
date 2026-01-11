import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border py-6 sticky top-0 bg-background/95 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4">
          <Link to="/">
            <Button variant="ghost" size="lg">
              <Icon name="ArrowLeft" className="mr-2" size={20} />
              Вернуться на главную
            </Button>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8">
          Политика конфиденциальности
        </h1>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
              1. Общие положения
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных 
              пользователей сайта клиники эстетической медицины «Улыбка». Используя наш сайт и оставляя свои 
              персональные данные, вы соглашаетесь с условиями данной Политики.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
              2. Сбор персональных данных
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Мы можем собирать следующие персональные данные:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Имя и фамилию</li>
              <li>Контактный телефон</li>
              <li>Адрес электронной почты</li>
              <li>Информацию о запросах и обращениях</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-3">
              Персональные данные собираются только при их добровольном предоставлении пользователем 
              через формы обратной связи на сайте.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
              3. Цели обработки данных
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Собранные персональные данные используются для:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Связи с вами для записи на консультацию или процедуры</li>
              <li>Предоставления информации о наших услугах</li>
              <li>Ответов на ваши вопросы и обращения</li>
              <li>Улучшения качества обслуживания</li>
              <li>Информирования об акциях и специальных предложениях (с вашего согласия)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
              4. Защита персональных данных
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Мы принимаем все необходимые технические и организационные меры для защиты ваших персональных 
              данных от несанкционированного доступа, изменения, раскрытия или уничтожения. Доступ к 
              персональным данным имеют только уполномоченные сотрудники клиники.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
              5. Передача данных третьим лицам
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Мы не передаём ваши персональные данные третьим лицам без вашего согласия, за исключением 
              случаев, предусмотренных законодательством Российской Федерации.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
              6. Ваши права
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Вы имеете право:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Получать информацию о ваших персональных данных, которые мы храним</li>
              <li>Требовать исправления неточных данных</li>
              <li>Требовать удаления ваших персональных данных</li>
              <li>Отозвать согласие на обработку персональных данных</li>
              <li>Отказаться от получения информационных рассылок</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
              7. Использование cookies
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Наш сайт использует файлы cookies для улучшения работы сайта и удобства пользователей. 
              Вы можете настроить свой браузер для отказа от cookies, однако это может ограничить 
              функциональность сайта.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
              8. Изменения в Политике конфиденциальности
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Мы оставляем за собой право вносить изменения в настоящую Политику конфиденциальности. 
              Актуальная версия всегда доступна на данной странице. Дата последнего обновления: январь 2025.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
              9. Контактная информация
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Если у вас есть вопросы относительно обработки ваших персональных данных, вы можете связаться с нами:
            </p>
            <div className="space-y-2 text-muted-foreground ml-4">
              <p>
                <strong>Телефон:</strong>{" "}
                <a href="tel:+79241375075" className="text-primary hover:underline">
                  +7 924 137-50-75
                </a>
              </p>
              <p>
                <strong>Адрес:</strong> г. Находка, ул. Ленинская, 3
              </p>
            </div>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <Link to="/">
            <Button size="lg" className="w-full sm:w-auto">
              <Icon name="ArrowLeft" className="mr-2" size={20} />
              Вернуться на главную
            </Button>
          </Link>
        </div>
      </main>

      <footer className="bg-foreground text-background py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-background/60 text-sm">
            © 2025 Клиника эстетической медицины «Улыбка». Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Privacy;
