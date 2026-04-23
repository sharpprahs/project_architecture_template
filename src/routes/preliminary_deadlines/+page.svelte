<!-- src/routes/preliminary_deadlines/+page.svelte -->
<script>
  import { base } from "$app/paths";

  const phases = [
    {
      id: "01",
      title: "Предпроект / структура / логика / макеты",
      duration: "3–4 недели",
      summary:
        "Декомпозиция MVP, роли, сценарии, сущности, структура админки и витрины, логика заказа, резерва и склада, прототипы и макеты.",
      result: "Макет в Figma, структура данных"
    },
    {
      id: "02",
      title: "Поиск frontend-разработчика",
      duration: "1–3 недели",
      summary:
        "Поиск middle++ frontend-разработчика на SvelteKit либо Nuxt. Оценка интерфейсной части и параллельный старт frontend-разработки.",
      result:
        "Заключен договор с frontend-разработчиком, параллельно с backend стартует frontend-часть"
    },
    {
      id: "03",
      title: "Технический фундамент проекта",
      duration: "1–2 недели",
      summary:
        "Репозиторий backend, Docker Compose для dev, миграции, базовая структура backend, Swagger / OpenAPI, модель пользователей системы, авторизация в админку, login/logout для admin, роли и защита admin routes.",
      result:
        "Развернут инфраструктурный backend-каркас проекта, подготовлена auth-инфраструктура и каркас ролей"
    },
    {
      id: "04",
      title: "Каталог товаров",
      duration: "2–3 недели",
      summary:
        "Товары, категории, бренды, фото/ссылки на фото, артикул, название, описание, цена, активность товара, API каталога и карточки товара, поиск, базовая Excel-загрузка.",
      result:
        "CRUD товаров, категорий и брендов, публичный API каталога и карточки товара, базовый поиск"
    },
    {
      id: "05",
      title: "Excel import / background jobs",
      duration: "1–2 недели",
      summary:
        "Загрузка Excel, парсинг, валидация, отчёт об ошибках, журнал загрузок. Background jobs не обязательны на старте; при необходимости используются для обработки импорта.",
      result:
        "Import API, обработка загрузок, отчёт об ошибках, история загрузок"
    },
    {
      id: "06",
      title: "Склады и остатки",
      duration: "1.5 недели",
      summary:
        "Склады, типы складов, остатки по складам, общий остаток, доступный остаток, зарезервированный остаток, просмотр остатков в админке и API остатков.",
      result:
        "Справочник складов и базовая модель складских остатков"
    },
    {
      id: "07",
      title: "Операции склада",
      duration: "2 недели",
      summary:
        "Приход товара, списание, перемещение между складами, причины списания, журнал складских операций, логирование действий, транзакционная логика обновления остатков и пересчёт.",
      result:
        "Рабочий модуль складских операций с корректным обновлением остатков"
    },
    {
      id: "08",
      title: "Корзина и заказы",
      duration: "2 недели",
      summary:
        "Корзина, добавление и удаление товара, изменение количества, создание заказа, позиции заказа, статусы, клиентские данные, история заказа, просмотр заказов, тип клиента B2C/B2B.",
      result:
        "Модуль корзины и заказов с базовыми статусами"
    },
    {
      id: "09",
      title: "Резерв товара",
      duration: "1–2 недели",
      summary:
        "Резерв при создании заказа, уменьшение доступного остатка, снятие резерва при отмене, перевод резерва в отгрузку/списание, защита от гонок, проверка доступности и пересчёт остатков.",
      result:
        "Реализована логика резервирования товара и корректного обновления остатков"
    },
    {
      id: "10",
      title: "B2C личный кабинет и auth",
      duration: "1–2 недели",
      summary:
        "Регистрация, авторизация, профиль, история заказов, повтор заказа, просмотр статусов.",
      result: "API auth, profile, order history и repeat order"
    },
    {
      id: "11",
      title: "B2B кабинет и базовая B2B-логика",
      duration: "2 недели",
      summary:
        "Авторизация B2B пользователя, профиль компании / реквизиты, история заказов B2B, просмотр B2B-статусов, базовый доступ к B2B-заказам, основа под специальные цены или договорные условия. Без полноценной 1С, счетов, актов, отсрочек и сложной договорной логики на MVP.",
      result: "Базовый B2B-модуль без тяжёлой корпоративной автоматизации"
    },
    {
      id: "12",
      title: "Доставка",
      duration: "1–2 недели",
      summary:
        "Интеграция API доставки, расчёт стоимости, расчёт сроков, выбор варианта доставки и сохранение выбранного варианта в заказе.",
      result: "API расчёта доставки и сохранения варианта доставки в заказе"
    },
    {
      id: "13",
      title: "Оплата",
      duration: "2 недели",
      summary:
        "Интеграция эквайринга, создание платёжной сессии, callback/webhook, подтверждение оплаты, статус оплаты, связка оплаты с заказом и обработка ошибок.",
      result: "Платёжный API и рабочий сценарий оплаты"
    },
    {
      id: "14",
      title: "Админка: заказы и управление",
      duration: "1.5 недели",
      summary:
        "Просмотр заказов, фильтрация, изменение статусов, комментарии менеджера, просмотр оплаты и состава заказа.",
      result: "Admin order management модуль"
    },
    {
      id: "15",
      title: "Финальная стабилизация",
      duration: "1–2 недели",
      summary:
        "Интеграционное тестирование, проверка складских сценариев, оплаты, доставки, заказа, багфикс, мелкие доработки и финальная документация.",
      result: "Проверенная backend-часть, готовая к production deploy"
    },
    {
      id: "16",
      title: "Деплой и запуск",
      duration: "2 недели",
      summary:
        "Деплой в polyrepo: infra / backend / frontend, поднятие CI/CD pipeline, production deployment и smoke test после выкладки.",
      result: "Готовый рабочий проект на домене"
    }
  ];

  const grouped = [
    {
      title: "Подготовка",
      range: "Этапы 1–3",
      duration: "≈ 1.5–2 месяца",
      points: [
        "Предпроект, структура, логика и макеты",
        "Поиск frontend-разработчика",
        "Технический фундамент проекта"
      ]
    },
    {
      title: "Core backend и каталог",
      range: "Этапы 4–9",
      duration: "≈ 2–2.5 месяца",
      points: [
        "Каталог товаров",
        "Excel import / background jobs",
        "Склады и остатки",
        "Операции склада",
        "Корзина и заказы",
        "Резерв товара"
      ]
    },
    {
      title: "Клиентские кабинеты и checkout",
      range: "Этапы 10–14",
      duration: "≈ 1.5 месяца",
      points: [
        "B2C кабинет",
        "B2B кабинет",
        "Доставка",
        "Оплата",
        "Админка заказов"
      ]
    },
    {
      title: "Финиш и запуск",
      range: "Этапы 15–16",
      duration: "≈ 0.5–1 месяц",
      points: [
        "Финальная стабилизация",
        "Production deployment и smoke test"
      ]
    }
  ];

  const budget = [
    {
      label: "Backend / архитектура / core MVP",
      value: "1 800 000 ₽",
      desc: "Основной объём работ по backend, архитектуре, интеграциям, складу, заказам, оплате, доставке и запуску MVP."
    },
    {
      label: "Frontend часть",
      value: "≈ 400 000 ₽",
      desc: "Ориентир по отдельной frontend-разработке после согласования макетов и API-контрактов."
    },
    {
      label: "Сервера / инфраструктура / сопутствующие расходы",
      value: "≈ 100 000 ₽",
      desc: "Домены, object storage, серверы, production rollout и инфраструктурные сопутствующие расходы."
    }
  ];
</script>

<div class="min-h-screen w-full bg-gradient-to-b from-slate-50 to-slate-100 text-slate-800 p-6 md:p-10">
  <div class="max-w-7xl mx-auto">
    <header class="mb-8">
      <div class="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
        MVP · Сроки, этапы и стоимость
      </div>
      <h1 class="mt-4 text-2xl md:text-4xl font-bold tracking-tight text-slate-900">
        План реализации первого MVP этапа: сроки, этапы и ориентировочная стоимость
      </h1>
      <p class="mt-3 max-w-5xl text-sm md:text-base text-slate-600">
        Ниже собран поэтапный план первого этапа проекта с общим средним ориентиром
        <strong>около 6 месяцев</strong>. Это оценка с учётом предпроекта, параллельной
        frontend/backend разработки, стабилизации и production deployment.
      </p>

      <nav class="mt-4 flex flex-wrap gap-2">
        <a
          href="{base}/"
          class="text-xs md:text-sm px-3 py-1 rounded-full border bg-white hover:bg-slate-50"
        >
          ← Назад к архитектуре
        </a>
      </nav>
    </header>

    <section class="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
      <div class="xl:col-span-2 rounded-2xl border border-slate-200 bg-white shadow-sm p-5 md:p-6">
        <h2 class="text-lg font-semibold text-slate-800">Общий ориентир по сроку</h2>
        <p class="mt-2 text-sm text-slate-600">
          Последовательная сумма этапов выглядит длиннее, но в реальности часть работ идёт параллельно:
          подбор frontend-разработчика, backend-модули, frontend по макетам и финальный deploy.
          Поэтому в качестве рабочего ориентира по первому этапу используется срок <strong>около 6 месяцев</strong>.
        </p>

        <div class="mt-5 grid grid-cols-1 md:grid-cols-4 gap-4">
          {#each grouped as item}
            <div class="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div class="text-xs uppercase tracking-wide text-slate-500">{item.range}</div>
              <div class="mt-1 font-semibold text-slate-900">{item.title}</div>
              <div class="mt-2 text-sm font-medium text-indigo-700">{item.duration}</div>
              <ul class="mt-3 list-disc pl-5 space-y-1 text-sm text-slate-600">
                {#each item.points as point}
                  <li>{point}</li>
                {/each}
              </ul>
            </div>
          {/each}
        </div>
      </div>

      <div class="rounded-2xl border border-slate-200 bg-white shadow-sm p-5 md:p-6">
        <h2 class="text-lg font-semibold text-slate-800">Сводка</h2>
        <div class="mt-4 grid gap-4">
          <div class="rounded-2xl border border-indigo-200 bg-indigo-50 p-4">
            <div class="text-xs uppercase tracking-wide text-slate-500">Средний срок</div>
            <div class="mt-1 text-3xl font-bold text-slate-900">≈ 6 мес.</div>
            <p class="mt-2 text-sm text-slate-600">Первый этап от предпроекта до production deployment.</p>
          </div>
          <div class="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
            <div class="text-xs uppercase tracking-wide text-slate-500">Общий бюджет</div>
            <div class="mt-1 text-3xl font-bold text-slate-900">≈ 2.4 млн ₽</div>
            <p class="mt-2 text-sm text-slate-600">Backend + frontend + инфраструктура и сопутствующие расходы.</p>
          </div>
          <div class="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <div class="text-xs uppercase tracking-wide text-slate-500">Формат запуска</div>
            <div class="mt-1 font-semibold text-slate-900">Поэтапно, без избыточного оверхеда</div>
            <p class="mt-2 text-sm text-slate-600">Docker Compose, polyrepo, внешний S3, без Kubernetes на старте.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="mb-8">
      <div class="mb-3">
        <h2 class="text-lg font-semibold text-slate-800">Поэтапный план</h2>
        <p class="mt-1 text-sm text-slate-600">
          Детализация первого этапа по backend- и продуктовым модулям.
        </p>
      </div>

      <div class="grid grid-cols-1 gap-4">
        {#each phases as phase}
          <article class="rounded-2xl border border-slate-200 bg-white shadow-sm p-5 md:p-6">
            <div class="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div class="flex gap-4">
                <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-indigo-200 bg-indigo-50 text-sm font-semibold text-indigo-700">
                  {phase.id}
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-slate-900">{phase.title}</h3>
                  <p class="mt-2 text-sm text-slate-600">{phase.summary}</p>
                </div>
              </div>
              <div class="lg:text-right">
                <div class="inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-medium text-slate-700">
                  {phase.duration}
                </div>
              </div>
            </div>

            <div class="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div class="text-xs uppercase tracking-wide text-slate-500">Результат этапа</div>
              <p class="mt-1 text-sm text-slate-700">{phase.result}</p>
            </div>
          </article>
        {/each}
      </div>
    </section>

    <section class="mb-8 rounded-2xl border border-slate-200 bg-white shadow-sm p-5 md:p-6">
      <div class="mb-4">
        <h2 class="text-lg font-semibold text-slate-800">Стоимость первого MVP этапа</h2>
        <p class="mt-1 text-sm text-slate-600">
          Ориентировочная финансовая рамка на первый этап проекта.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        {#each budget as item}
          <div class="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <div class="text-xs uppercase tracking-wide text-slate-500">{item.label}</div>
            <div class="mt-2 text-2xl font-bold text-slate-900">{item.value}</div>
            <p class="mt-2 text-sm text-slate-600">{item.desc}</p>
          </div>
        {/each}
      </div>

      <div class="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
        <div class="text-xs uppercase tracking-wide text-slate-500">Итог</div>
        <div class="mt-1 text-3xl font-bold text-slate-900">≈ 2 400 000 ₽</div>
        <p class="mt-2 text-sm text-slate-700">
          Суммарный ориентир на первый MVP этап: backend, frontend, инфраструктура и production launch.
        </p>
      </div>
    </section>

    <section class="rounded-2xl border border-amber-200 bg-amber-50 p-5 md:p-6">
      <h2 class="text-lg font-semibold text-slate-800">Комментарий по оценке</h2>
      <p class="mt-2 text-sm text-slate-700">
        Оценка рассчитана для первого рабочего этапа продукта, а не только для голой витрины.
        Внутрь уже входит складской контур, резерв, заказы, базовый B2C/B2B слой, доставка,
        оплата, админская часть и production deployment. Поэтому ориентир около 6 месяцев и
        около 2.4 млн ₽ для такого объёма.
      </p>
    </section>
  </div>
</div>
