<script>
  // нужен для корректных ссылок на GitHub Pages (base префикс)
  import { base } from "$app/paths";

  const fullPlan = [
    {
      month: "1",
      goals:
        "Архитектура, макеты в Figma, ER-диаграмма БД, стратегия интеграций.",
      results:
        "Макеты интерфейса в Figma (витрина + CRM/админка), ER-диаграмма базы данных и схема интеграций с поставщиками.",
    },
    {
      month: "2",
      goals:
        "ETL (Go) для 1–2 поставщиков (REST/SOAP), нормализация номенклатуры, загрузка медиа в MinIO, подключение NATS/Dragonfly.",
      results: "Первые загрузки в Postgres, картинки в MinIO, события в NATS.",
    },
    {
      month: "3",
      goals:
        "Ещё 5–6 поставщиков (CSV/XLS/парсинг), правила ценообразования (маржа/округления), первичная интеграция с OpenSearch (индекс каталога).\nСроки на данном этапе зависят от кол-ва поставщиков и их API",
      results: "Поиск по 100–200k SKU, базовые фильтры/фасеты.",
    },
    {
      month: "4-7",
      goals:
        "Витрина (SvelteKit): категории, фильтры, карточка, корзина, кабинет; Backend (Fastify) для публичного API; кэширование Dragonfly.",
      results: "Публичный прототип витрины на тестовом домене.",
    },
    {
      month: "8-11",
      goals:
        "CRM/Админка (SvelteKit): заказы, счета, чат; Backend-админ (RBAC, WS), схемы orders/bills/pricing, события order.created/bill.updated.",
      results: "Рабочая админка, базовые процессы продаж.",
    },
    {
      month: "12-13",
      goals:
        "Подключение остальных поставщиков (до 20), массовая загрузка 500k–1M SKU, оптимизация ETL (батчи, дедуп, остатки), стабильность.",
      results: "Полный каталог, стабильные обновления.",
    },
    {
      month: "14",
      goals:
        "Наблюдаемость: Prometheus+Grafana, Loki+алерты; оптимизация Postgres (индексы/реплики), инвалидация кэшей через NATS, подготовка staging/prod.",
      results: "Дашборды и алерты, подготовка к продакшену.",
    },
    {
      month: "15",
      goals:
        "Полировка UX, нагрузочное тестирование, документация, (опционально) Kubernetes, финальные демо и запуск.",
      results: "Запуск и передача.",
    },
  ];

  const mvpPlan = [
    {
      month: "1",
      goals: "Архитектура, макеты в Figma, схема БД, первые интеграции.",
      results:
        "Макеты интерфейса (витрина + CRM), схема базы, подготовка dev-стенда.",
    },
    {
      month: "2",
      goals:
        "ETL (Go) для 1–2 ключевых поставщиков, загрузка в Postgres, MinIO для картинок.",
      results: "Первые данные и медиа в системе.",
    },
    {
      month: "3-4",
      goals:
        "Витрина (SvelteKit): категории, фильтры, карточка, корзина, заказ.",
      results: "Прототип магазина с базовым каталогом.",
    },
    {
      month: "5-6",
      goals:
        "CRM/админка (минимум): управление заказами, счета, базовая аналитика.",
      results: "Рабочая CRM, цикл продажи от корзины до счета.",
    },
    {
      month: "7-8",
      goals:
        "Расширение: ещё 3–5 поставщиков, поиск в OpenSearch, оптимизация ETL.",
      results: "Каталог 100k–200k SKU, стабильная работа магазина.",
    },
  ];
</script>

<div class="min-h-screen w-full bg-gradient-to-b from-slate-50 to-slate-100 text-slate-800 p-6 md:p-10">
  <div class="max-w-6xl mx-auto">
    <!-- HEADER -->
    <header class="mb-8">
      <h1 class="text-2xl md:text-3xl font-bold tracking-tight">
        Дорожная карта: полный проект и MVP / ориентировочные сроки и этапы
      </h1>
      <p class="text-sm md:text-base text-slate-600 mt-2">
        Ниже два сценария: полный проект (~15 мес, ~3 млн ₽) и MVP (~6–8 мес, ~1.3–1.7 млн ₽).
        Финальные сроки и бюджет уточняются после макетов и фиксации функционала. 
        <br> Full: Полное решение со всеми интеграциями и автоматизациями. 
        <br>MVP: Быстрый выход в рынок; магазин и CRM работают, а новые функции добавляются постепенно.
      </p>
      <a
        href="{base}/"
        class="inline-block mt-4 text-xs md:text-sm px-3 py-1 rounded-full border bg-white hover:bg-slate-50"
      >
        ← Назад к архитектуре
      </a>
    </header>

    <!-- FULL PLAN -->
    <section class="mb-12">
      <h2 class="text-lg font-semibold text-slate-700 mb-2">
        Полный проект (15 месяцев, ~3 млн ₽)
      </h2>

      <!-- MOBILE: карточки -->
      <div class="md:hidden space-y-3">
        {#each fullPlan as r}
          <div class="rounded-2xl border border-slate-200 bg-white shadow-sm p-4">
            <div class="flex items-center gap-2 mb-1">
              <div class="h-2 w-2 rounded-full bg-emerald-500"></div>
              <h3 class="font-semibold">Месяц {r.month}</h3>
            </div>
            <div class="text-xs text-slate-500 mb-2">Цели</div>
            <p class="text-sm text-slate-700 whitespace-pre-line">{r.goals}</p>
            <div class="mt-3 text-xs text-slate-500 mb-1">Ключевые результаты</div>
            <p class="text-sm text-slate-700">{r.results}</p>
          </div>
        {/each}
      </div>

      <!-- DESKTOP/TABLET: таблица -->
      <div class="hidden md:block rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden mt-2">
        <div class="overflow-x-auto">
          <table class="w-full text-sm min-w-[800px]">
            <thead class="bg-slate-50 text-slate-600">
              <tr>
                <th class="text-left p-3 w-28">Месяц</th>
                <th class="text-left p-3">Цели</th>
                <th class="text-left p-3 w-[28rem]">Ключевые результаты</th>
              </tr>
            </thead>
            <tbody class="[&_tr:not(:last-child)]:border-b [&_tr]:border-slate-200">
              {#each fullPlan as r}
                <tr class="align-top">
                  <td class="p-3 font-medium">{r.month}</td>
                  <td class="p-3 whitespace-pre-line">{r.goals}</td>
                  <td class="p-3">{r.results}</td>
                </tr>
              {/each}
            </tbody>
          </table>
        </div>
      </div>

      <!-- краткое резюме -->
      <p class="mt-3 text-xs text-slate-500">
        Включает: 20+ поставщиков, полную CRM, наблюдаемость, прод-стек. Готово к масштабированию.
      </p>
    </section>

    <!-- MVP PLAN -->
    <section>
      <h2 class="text-lg font-semibold text-slate-700 mb-2">
        MVP (6–8 месяцев, ~1.3–1.7 млн ₽)
      </h2>

      <!-- MOBILE: карточки -->
      <div class="md:hidden space-y-3">
        {#each mvpPlan as r}
          <div class="rounded-2xl border border-indigo-200 bg-white shadow-sm p-4">
            <div class="flex items-center gap-2 mb-1">
              <div class="h-2 w-2 rounded-full bg-emerald-500"></div>
              <h3 class="font-semibold">Месяц {r.month}</h3>
            </div>
            <div class="text-xs text-slate-500 mb-2">Цели</div>
            <p class="text-sm text-slate-700 whitespace-pre-line">{r.goals}</p>
            <div class="mt-3 text-xs text-slate-500 mb-1">Ключевые результаты</div>
            <p class="text-sm text-slate-700">{r.results}</p>
          </div>
        {/each}
      </div>

      <!-- DESKTOP/TABLET: таблица -->
      <div class="hidden md:block rounded-2xl border border-indigo-200 bg-white shadow-sm overflow-hidden mt-2">
        <div class="overflow-x-auto">
          <table class="w-full text-sm min-w-[700px]">
            <thead class="bg-slate-50 text-slate-600">
              <tr>
                <th class="text-left p-3 w-28">Месяц</th>
                <th class="text-left p-3">Цели</th>
                <th class="text-left p-3 w-[24rem]">Ключевые результаты</th>
              </tr>
            </thead>
            <tbody class="[&_tr:not(:last-child)]:border-b [&_tr]:border-slate-200">
              {#each mvpPlan as r}
                <tr class="align-top">
                  <td class="p-3 font-medium">{r.month}</td>
                  <td class="p-3 whitespace-pre-line">{r.goals}</td>
                  <td class="p-3">{r.results}</td>
                </tr>
              {/each}
            </tbody>
          </table>
        </div>
      </div>

      <!-- краткое резюме -->
      <p class="mt-3 text-xs text-slate-500">
        Включает: магазин, 1–2 ключ. поставщика, базовую CRM и поиск. Без избыточных интеграций; можно выйти в рынок быстрее.
      </p>
    </section>

    <!-- Блок про платный макетный этап -->
    <div class="mt-10 rounded-2xl border border-indigo-200 bg-white shadow-sm p-5">
      <h2 class="text-lg font-semibold text-slate-700 mb-2">
        1 Шаг: Этап проектирования макета/архитектуры (фиксированная цена и короткий срок)
      </h2>
      <p class="text-sm text-slate-700 mb-3">
        <strong>Что будет сделано:</strong> макеты в Figma (витрина + CRM/админка),
        ER-диаграмма базы данных и схема интеграций с поставщиками.
      </p>
      <p class="text-sm text-slate-700 mb-3">
        <strong>Зачем это нужно:</strong> чёткое понимание функционала, ролей и процессов - затем
        точный план по срокам и бюджету; при необходимости - урезаем или расширяем объём.
      </p>
      <p class="text-sm text-slate-700">
        <strong>Сроки и стоимость:</strong> 3–5 недель. Фикс - <span class="font-medium">250 тыс ₽</span>.
        Оплата: 50% предоплата, 50% после демонстрации макета и архитектурной схемы.
      </p>
    </div>

    <div class="mt-6 text-xs text-slate-500">
      Примечание: ускорение возможно при подключении доп. разработчиков (фронт/DevOps).
      <a href="https://t.me/sharpsss" target="_blank" class="text-neutral-500 text-sm">🐨 sharpsss dev</a>
    </div>
  </div>
</div>