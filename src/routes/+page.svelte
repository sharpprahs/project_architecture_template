<!-- src/routes/+page.svelte -->
<script>
    import { assets } from "$app/paths";
    const diagram = `${assets}/diagram.png`;
</script>

<!-- Весь экран + фон -->
<div
    class="min-h-screen w-full scroll-smooth bg-gradient-to-b from-slate-50 to-slate-100 text-slate-800 p-6 md:p-10"
>
    <div class="max-w-7xl mx-auto">
        <!-- HEADER -->
        <header class="mb-8">
            <h1 class="text-2xl md:text-3xl font-bold tracking-tight">
                Архитектура и потоки по сервисам
            </h1>
            <p class="text-sm md:text-base text-slate-600 mt-2">
                CRM (чат/инвойсы/биллинг/маржа/статистика), Витрина (магазин),
                ETL (Go) + общая инфраструктура (PostgreSQL, OpenSearch, MinIO,
                Dragonfly, NATS).
            </p>

            <nav class="mt-4 flex flex-wrap gap-2">
                <a
                    href="https://excalidraw.com/#room=197a1f2dba8d55b0ba54,u9Wn2EpMpz1lPOXYqXALqA"
                    target="_blank"
                    rel="noopener"
                    class="text-xs md:text-sm px-3 py-1 rounded-full border bg-white hover:bg-slate-50 font-medium"
                    >Более общая демонстрация в Exalidraw ↗</a
                >
            </nav>
        </header>

        <!-- ==== OVERVIEW ==== -->
        <section id="overview" class="scroll-mt-24">
            <div class="mb-3">
                <h2 class="text-lg font-semibold text-slate-700">
                    Общий обзор: Поставщики → ETL → Шина → Хранилища →
                    API/CRM/Витрина
                </h2>
            </div>

            <div class="grid grid-cols-1 xl:grid-cols-2 gap-8">
                <!-- LEFT: Data Path -->
                <div>
                    <!-- Поставщики -->
                    <div
                        class="relative rounded-2xl border border-slate-200 bg-white shadow-sm p-4"
                    >
                        <div class="flex items-center gap-2 mb-1">
                            <div
                                class="h-2 w-2 rounded-full bg-emerald-500"
                            ></div>
                            <h3 class="font-semibold">Поставщики</h3>
                        </div>
                        <p class="text-sm text-slate-600 mb-3">
                            Treolan (REST), VTT (SOAP), другие API/парсинг
                        </p>
                        <span
                            class="inline-block text-xs bg-slate-100 border border-slate-200 rounded-full px-2 py-0.5 mr-1 mb-1"
                            >Каталоги</span
                        >
                        <span
                            class="inline-block text-xs bg-slate-100 border border-slate-200 rounded-full px-2 py-0.5 mr-1 mb-1"
                            >Runtime цены/остатки</span
                        >
                        <span
                            class="inline-block text-xs bg-slate-100 border border-slate-200 rounded-full px-2 py-0.5 mr-1 mb-1"
                            >Сертификаты/медиа</span
                        >
                    </div>

                    <!-- ArrowDown -->
                    <div class="flex justify-center my-2">
                        <svg
                            width="18"
                            height="36"
                            viewBox="0 0 18 36"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <defs>
                                <marker
                                    id="arrowhead"
                                    markerWidth="8"
                                    markerHeight="8"
                                    refX="4"
                                    refY="2.5"
                                    orient="auto"
                                >
                                    <polygon
                                        points="0 0, 5 2.5, 0 5"
                                        fill="#10b981"
                                    />
                                </marker>
                            </defs>
                            <line
                                x1="9"
                                y1="0"
                                x2="9"
                                y2="28"
                                stroke="#10b981"
                                stroke-width="2"
                                marker-end="url(#arrowhead)"
                            />
                        </svg>
                    </div>

                    <!-- ETL -->
                    <div
                        class="relative rounded-2xl border border-slate-200 bg-white shadow-sm p-4"
                    >
                        <div class="flex items-center gap-2 mb-1">
                            <div
                                class="h-2 w-2 rounded-full bg-emerald-500"
                            ></div>
                            <h3 class="font-semibold">ETL Воркеры (Go)</h3>
                        </div>
                        <p class="text-sm text-slate-600 mb-3">
                            Коннекторы, нормализация, дедуп, расчёт цен,
                            загрузка медиа
                        </p>
                        <ul class="list-disc pl-5 space-y-1 text-sm">
                            <li>Мэппинг брендов/категорий, дедуп SKU</li>
                            <li>Правила маржи/наценки, округление</li>
                            <li>Загрузка изображений → MinIO (S3)</li>
                            <li>Публикация событий в NATS</li>
                        </ul>
                    </div>

                    <!-- ArrowDown -->
                    <div class="flex justify-center my-2">
                        <svg
                            width="18"
                            height="36"
                            viewBox="0 0 18 36"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <defs>
                                <marker
                                    id="arrowhead2"
                                    markerWidth="8"
                                    markerHeight="8"
                                    refX="4"
                                    refY="2.5"
                                    orient="auto"
                                >
                                    <polygon
                                        points="0 0, 5 2.5, 0 5"
                                        fill="#10b981"
                                    />
                                </marker>
                            </defs>
                            <line
                                x1="9"
                                y1="0"
                                x2="9"
                                y2="28"
                                stroke="#10b981"
                                stroke-width="2"
                                marker-end="url(#arrowhead2)"
                            />
                        </svg>
                    </div>

                    <!-- NATS -->
                    <div
                        class="relative rounded-2xl border border-slate-200 bg-white shadow-sm p-4"
                    >
                        <div class="flex items-center gap-2 mb-1">
                            <div
                                class="h-2 w-2 rounded-full bg-emerald-500"
                            ></div>
                            <h3 class="font-semibold">NATS JetStream</h3>
                        </div>
                        <p class="text-sm text-slate-600 mb-3">
                            Шина событий/очереди (стримы, durable-consumers)
                        </p>
                        <span
                            class="inline-block text-xs bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full px-2 py-0.5 mr-1 mb-1"
                            >events: offers.updated</span
                        >
                        <span
                            class="inline-block text-xs bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full px-2 py-0.5 mr-1 mb-1"
                            >events: price.updated</span
                        >
                        <span
                            class="inline-block text-xs bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full px-2 py-0.5 mr-1 mb-1"
                            >cmd: search.delta.index</span
                        >
                        <span
                            class="inline-block text-xs bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full px-2 py-0.5 mr-1 mb-1"
                            >cmd: cache.invalidate</span
                        >
                    </div>

                    <!-- PG & OpenSearch -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        <div>
                            <div class="flex justify-center my-2">
                                <svg
                                    width="18"
                                    height="36"
                                    viewBox="0 0 18 36"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <defs>
                                        <marker
                                            id="arrowhead3"
                                            markerWidth="8"
                                            markerHeight="8"
                                            refX="4"
                                            refY="2.5"
                                            orient="auto"
                                        >
                                            <polygon
                                                points="0 0, 5 2.5, 0 5"
                                                fill="#94a3b8"
                                            />
                                        </marker>
                                    </defs>
                                    <line
                                        x1="9"
                                        y1="0"
                                        x2="9"
                                        y2="28"
                                        stroke="#94a3b8"
                                        stroke-width="2"
                                        stroke-dasharray="4 4"
                                        marker-end="url(#arrowhead3)"
                                    />
                                </svg>
                            </div>
                            <div
                                class="relative rounded-2xl border border-slate-200 bg-white shadow-sm p-4"
                            >
                                <div class="flex items-center gap-2 mb-1">
                                    <div
                                        class="h-2 w-2 rounded-full bg-emerald-500"
                                    ></div>
                                    <h3 class="font-semibold">PostgreSQL</h3>
                                </div>
                                <p class="text-sm text-slate-600 mb-3">
                                    products / offers / rules / orders / bills /
                                    users
                                </p>
                                <ul class="list-disc pl-5 space-y-1 text-sm">
                                    <li>
                                        Схемы: <strong>catalog</strong>,
                                        <strong>commerce</strong>,
                                        <strong>pricing</strong>
                                    </li>
                                    <li>Роли: etl_rw / api_rw</li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <div class="flex justify-center my-2">
                                <svg
                                    width="18"
                                    height="36"
                                    viewBox="0 0 18 36"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <defs>
                                        <marker
                                            id="arrowhead4"
                                            markerWidth="8"
                                            markerHeight="8"
                                            refX="4"
                                            refY="2.5"
                                            orient="auto"
                                        >
                                            <polygon
                                                points="0 0, 5 2.5, 0 5"
                                                fill="#94a3b8"
                                            />
                                        </marker>
                                    </defs>
                                    <line
                                        x1="9"
                                        y1="0"
                                        x2="9"
                                        y2="28"
                                        stroke="#94a3b8"
                                        stroke-width="2"
                                        stroke-dasharray="4 4"
                                        marker-end="url(#arrowhead4)"
                                    />
                                </svg>
                            </div>
                            <div
                                class="relative rounded-2xl border border-slate-200 bg-white shadow-sm p-4"
                            >
                                <div class="flex items-center gap-2 mb-1">
                                    <div
                                        class="h-2 w-2 rounded-full bg-emerald-500"
                                    ></div>
                                    <h3 class="font-semibold">OpenSearch</h3>
                                </div>
                                <p class="text-sm text-slate-600 mb-3">
                                    Индекс каталога, фасеты, полнотекст
                                </p>
                                <ul class="list-disc pl-5 space-y-1 text-sm">
                                    <li>Δ-индексация по событиям</li>
                                    <li>Фильтры/агрегации/релевантность</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- MinIO -->
                    <div class="flex justify-center my-2">
                        <svg
                            width="18"
                            height="36"
                            viewBox="0 0 18 36"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <defs>
                                <marker
                                    id="arrowhead5"
                                    markerWidth="8"
                                    markerHeight="8"
                                    refX="4"
                                    refY="2.5"
                                    orient="auto"
                                >
                                    <polygon
                                        points="0 0, 5 2.5, 0 5"
                                        fill="#10b981"
                                    />
                                </marker>
                            </defs>
                            <line
                                x1="9"
                                y1="0"
                                x2="9"
                                y2="28"
                                stroke="#10b981"
                                stroke-width="2"
                                marker-end="url(#arrowhead5)"
                            />
                        </svg>
                    </div>
                    <div
                        class="relative rounded-2xl border border-slate-200 bg-white shadow-sm p-4"
                    >
                        <div class="flex items-center gap-2 mb-1">
                            <div
                                class="h-2 w-2 rounded-full bg-emerald-500"
                            ></div>
                            <h3 class="font-semibold">MinIO (S3) + CDN</h3>
                        </div>
                        <p class="text-sm text-slate-600 mb-3">
                            Картинки/документы (immutable, версии)
                        </p>
                        <ul class="list-disc pl-5 space-y-1 text-sm">
                            <li>Генерация webp/avif, превью</li>
                            <li>
                                Раздача через CDN (Cache-Control: immutable)
                            </li>
                            <li>
                                URL: cdn.remo-shop.ru/p/{"{id}"}/img/{"{hash}"}.webp
                            </li>
                        </ul>
                        <p class="text-xs text-slate-500 mt-2">
                            Изображения уходят напрямую в браузеры через CDN.
                        </p>
                    </div>
                </div>

                <!-- RIGHT: App Layer -->
                <div>
                    <div
                        class="relative rounded-2xl border border-slate-200 bg-white shadow-sm p-4"
                    >
                        <div class="flex items-center gap-2 mb-1">
                            <div
                                class="h-2 w-2 rounded-full bg-emerald-500"
                            ></div>
                            <h3 class="font-semibold">SvelteKit фронты</h3>
                        </div>
                        <p class="text-sm text-slate-600 mb-3">
                            Витрина (Shop) и CRM/Админка
                        </p>
                        <span
                            class="inline-block text-xs bg-slate-100 border border-slate-200 rounded-full px-2 py-0.5 mr-1 mb-1"
                            >SSR/SPA</span
                        >
                        <span
                            class="inline-block text-xs bg-slate-100 border border-slate-200 rounded-full px-2 py-0.5 mr-1 mb-1"
                            >RBAC</span
                        >
                    </div>

                    <div class="flex justify-center my-2">
                        <svg
                            width="18"
                            height="36"
                            viewBox="0 0 18 36"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <defs>
                                <marker
                                    id="arrowhead6"
                                    markerWidth="8"
                                    markerHeight="8"
                                    refX="4"
                                    refY="2.5"
                                    orient="auto"
                                >
                                    <polygon
                                        points="0 0, 5 2.5, 0 5"
                                        fill="#10b981"
                                    />
                                </marker>
                            </defs>
                            <line
                                x1="9"
                                y1="0"
                                x2="9"
                                y2="28"
                                stroke="#10b981"
                                stroke-width="2"
                                marker-end="url(#arrowhead6)"
                            />
                        </svg>
                    </div>

                    <div
                        class="relative rounded-2xl border border-slate-200 bg-white shadow-sm p-4"
                    >
                        <div class="flex items-center gap-2 mb-1">
                            <div
                                class="h-2 w-2 rounded-full bg-emerald-500"
                            ></div>
                            <h3 class="font-semibold">
                                Backend API (Node.js + Fastify)
                            </h3>
                        </div>
                        <p class="text-sm text-slate-600 mb-3">
                            Публичное + Админ API, подписчики NATS
                        </p>
                        <ul class="list-disc pl-5 space-y-1 text-sm">
                            <li>Маршруты: поиск/категории/карточки/чекаут</li>
                            <li>Админ: прайс-правила, заказы, чат</li>
                            <li>Инвалидация кэшей по событиям</li>
                        </ul>
                    </div>

                    <div class="flex justify-center my-2">
                        <svg
                            width="18"
                            height="36"
                            viewBox="0 0 18 36"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <defs>
                                <marker
                                    id="arrowhead7"
                                    markerWidth="8"
                                    markerHeight="8"
                                    refX="4"
                                    refY="2.5"
                                    orient="auto"
                                >
                                    <polygon
                                        points="0 0, 5 2.5, 0 5"
                                        fill="#10b981"
                                    />
                                </marker>
                            </defs>
                            <line
                                x1="9"
                                y1="0"
                                x2="9"
                                y2="28"
                                stroke="#10b981"
                                stroke-width="2"
                                marker-end="url(#arrowhead7)"
                            />
                        </svg>
                    </div>

                    <div
                        class="relative rounded-2xl border border-slate-200 bg-white shadow-sm p-4"
                    >
                        <div class="flex items-center gap-2 mb-1">
                            <div
                                class="h-2 w-2 rounded-full bg-emerald-500"
                            ></div>
                            <h3 class="font-semibold">Dragonfly (кэш)</h3>
                        </div>
                        <p class="text-sm text-slate-600 mb-3">
                            Кэш списков/поиска/сессий (TTL + инвалидация)
                        </p>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                            <div
                                class="relative rounded-2xl border border-slate-200 bg-white shadow-sm p-4"
                            >
                                <div class="flex items-center gap-2 mb-1">
                                    <div
                                        class="h-2 w-2 rounded-full bg-emerald-500"
                                    ></div>
                                    <h3 class="font-semibold">
                                        PostgreSQL (RO/RW)
                                    </h3>
                                </div>
                                <p class="text-sm text-slate-600">
                                    Детали товаров, заказы, счета, пользователи
                                </p>
                            </div>
                            <div
                                class="relative rounded-2xl border border-slate-200 bg-white shadow-sm p-4"
                            >
                                <div class="flex items-center gap-2 mb-1">
                                    <div
                                        class="h-2 w-2 rounded-full bg-emerald-500"
                                    ></div>
                                    <h3 class="font-semibold">
                                        OpenSearch (query)
                                    </h3>
                                </div>
                                <p class="text-sm text-slate-600">
                                    Выдача, фильтры, фасеты, сортировки
                                </p>
                            </div>
                        </div>
                        <p class="text-xs text-slate-500 mt-2">
                            Backend читает OpenSearch для списков/фасетов,
                            Postgres — для деталей/заказов.
                        </p>
                    </div>
                </div>
            </div>

            <!-- LEGEND -->
            <div class="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div
                    class="rounded-2xl border border-slate-200 bg-white shadow-sm p-4"
                >
                    <div class="flex items-center gap-2 mb-1">
                        <div class="h-2 w-2 rounded-full bg-indigo-500"></div>
                        <h3 class="font-semibold">Безопасность</h3>
                    </div>
                    <ul class="list-disc pl-5 space-y-1 text-sm">
                        <li>JWT + RBAC для CRM/админки</li>
                        <li>Секреты в Vault/k8s Secrets</li>
                        <li>Rate limit, CORS, аудит</li>
                    </ul>
                </div>

                <div
                    class="rounded-2xl border border-slate-200 bg-white shadow-sm p-4"
                >
                    <div class="flex items-center gap-2 mb-1">
                        <div class="h-2 w-2 rounded-full bg-indigo-500"></div>
                        <h3 class="font-semibold">Наблюдаемость</h3>
                    </div>
                    <ul class="list-disc pl-5 space-y-1 text-sm">
                        <li>Prometheus + Grafana (метрики)</li>
                        <li>Loki (логи), алерты</li>
                        <li>Дэшборды: дельты/индексы/очереди</li>
                    </ul>
                </div>

                <div
                    class="rounded-2xl border border-slate-200 bg-white shadow-sm p-4"
                >
                    <div class="flex items-center gap-2 mb-1">
                        <div class="h-2 w-2 rounded-full bg-indigo-500"></div>
                        <h3 class="font-semibold">Деплой</h3>
                    </div>
                    <ul class="list-disc pl-5 space-y-1 text-sm">
                        <li>Dev: docker-compose</li>
                        <li>Prod: Kubernetes + GitOps</li>
                        <li>Managed Postgres/OpenSearch</li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- ==== SHOP ==== -->
        <section id="shop" class="mt-14 scroll-mt-24">
            <div class="mb-3">
                <h2 class="text-lg font-semibold text-slate-700">
                    Витрина (Shop): откуда берёт данные и что пишет
                </h2>
            </div>

            <div
                class="rounded-2xl border border-slate-200 bg-white shadow-sm p-5"
            >
                <div
                    class="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-4"
                >
                    <div
                        class="relative rounded-2xl border border-slate-200 bg-white shadow-sm p-4"
                    >
                        <div class="flex items-center gap-2 mb-1">
                            <div
                                class="h-2 w-2 rounded-full bg-emerald-500"
                            ></div>
                            <h3 class="font-semibold">Браузер пользователя</h3>
                        </div>
                        <p class="text-sm text-slate-600">
                            SvelteKit (SSR/SPA)
                        </p>
                    </div>
                    <div class="flex justify-center">
                        <svg
                            width="60"
                            height="20"
                            viewBox="0 0 60 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <defs>
                                <marker
                                    id="arrowhead-right"
                                    markerWidth="8"
                                    markerHeight="8"
                                    refX="4"
                                    refY="2.5"
                                    orient="auto"
                                >
                                    <polygon
                                        points="0 0, 5 2.5, 0 5"
                                        fill="#10b981"
                                    />
                                </marker>
                            </defs>
                            <line
                                x1="0"
                                y1="10"
                                x2="52"
                                y2="10"
                                stroke="#10b981"
                                stroke-width="2"
                                marker-end="url(#arrowhead-right)"
                            />
                        </svg>
                    </div>
                    <div
                        class="relative rounded-2xl border border-slate-200 bg-white shadow-sm p-4"
                    >
                        <div class="flex items-center gap-2 mb-1">
                            <div
                                class="h-2 w-2 rounded-full bg-emerald-500"
                            ></div>
                            <h3 class="font-semibold">Backend API</h3>
                        </div>
                        <p class="text-sm text-slate-600">
                            Fastify — публичное API
                        </p>
                    </div>
                    <div class="flex justify-center">
                        <svg
                            width="60"
                            height="20"
                            viewBox="0 0 60 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <defs>
                                <marker
                                    id="arrowhead-right2"
                                    markerWidth="8"
                                    markerHeight="8"
                                    refX="4"
                                    refY="2.5"
                                    orient="auto"
                                >
                                    <polygon
                                        points="0 0, 5 2.5, 0 5"
                                        fill="#10b981"
                                    />
                                </marker>
                            </defs>
                            <line
                                x1="0"
                                y1="10"
                                x2="52"
                                y2="10"
                                stroke="#10b981"
                                stroke-width="2"
                                marker-end="url(#arrowhead-right2)"
                            />
                        </svg>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div
                            class="relative rounded-2xl border border-slate-200 bg-white shadow-sm p-4"
                        >
                            <div class="flex items-center gap-2 mb-1">
                                <div
                                    class="h-2 w-2 rounded-full bg-emerald-500"
                                ></div>
                                <h3 class="font-semibold">Dragonfly</h3>
                            </div>
                            <p class="text-sm text-slate-600">
                                кэш: списки/фильтры/сессии
                            </p>
                        </div>
                        <div
                            class="relative rounded-2xl border border-slate-200 bg-white shadow-sm p-4"
                        >
                            <div class="flex items-center gap-2 mb-1">
                                <div
                                    class="h-2 w-2 rounded-full bg-emerald-500"
                                ></div>
                                <h3 class="font-semibold">OpenSearch (read)</h3>
                            </div>
                            <p class="text-sm text-slate-600">
                                поиск, фасеты, сортировки
                            </p>
                        </div>
                    </div>
                </div>

                <div
                    class="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-4 mt-6"
                >
                    <div></div>
                    <div class="hidden lg:block"></div>
                    <div
                        class="relative rounded-2xl border border-slate-200 bg-white shadow-sm p-4"
                    >
                        <div class="flex items-center gap-2 mb-1">
                            <div
                                class="h-2 w-2 rounded-full bg-emerald-500"
                            ></div>
                            <h3 class="font-semibold">
                                PostgreSQL (read/write)
                            </h3>
                        </div>
                        <p class="text-sm text-slate-600">
                            детали товара, пользователи, корзины, заказы
                        </p>
                    </div>
                    <div class="flex justify-center">
                        <svg
                            width="60"
                            height="20"
                            viewBox="0 0 60 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <use href="#arrowhead-right" />
                        </svg>
                    </div>
                    <div
                        class="relative rounded-2xl border border-slate-200 bg-white shadow-sm p-4"
                    >
                        <div class="flex items-center gap-2 mb-1">
                            <div
                                class="h-2 w-2 rounded-full bg-emerald-500"
                            ></div>
                            <h3 class="font-semibold">NATS (publish)</h3>
                        </div>
                        <p class="text-sm text-slate-600">
                            events: order.created, cart.checkedout
                        </p>
                    </div>
                </div>

                <div
                    class="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-4 mt-6"
                >
                    <div></div>
                    <div class="hidden lg:block"></div>
                    <div
                        class="relative rounded-2xl border border-slate-200 bg-white shadow-sm p-4"
                    >
                        <div class="flex items-center gap-2 mb-1">
                            <div
                                class="h-2 w-2 rounded-full bg-emerald-500"
                            ></div>
                            <h3 class="font-semibold">MinIO/CDN (read)</h3>
                        </div>
                        <p class="text-sm text-slate-600">картинки товаров</p>
                    </div>
                    <div class="flex justify-center">
                        <svg
                            width="60"
                            height="20"
                            viewBox="0 0 60 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <use href="#arrowhead-right" />
                        </svg>
                    </div>
                    <div
                        class="relative rounded-2xl border border-slate-200 bg-white shadow-sm p-4"
                    >
                        <div class="flex items-center gap-2 mb-1">
                            <div
                                class="h-2 w-2 rounded-full bg-emerald-500"
                            ></div>
                            <h3 class="font-semibold">Платёжный провайдер</h3>
                        </div>
                        <p class="text-sm text-slate-600">
                            эквайринг клиента у вас
                        </p>
                    </div>
                </div>

                <p class="text-xs text-slate-500 mt-2">
                    Write: заказы/кабинет → Postgres (schema: <strong
                        >commerce</strong
                    >). Read: списки/фильтры из OpenSearch,
                    карточки/остатки/цены из Postgres (+ кэш Dragonfly). Медиа —
                    MinIO через CDN.
                </p>
            </div>
        </section>

        <!-- ==== CRM ==== -->
        <section id="crm" class="mt-14 scroll-mt-24">
            <div class="mb-3">
                <h2 class="text-lg font-semibold text-slate-700">
                    CRM/Админка: чат, инвойсы, биллинг, маржа, статистика
                </h2>
            </div>

            <div
                class="rounded-2xl border border-slate-200 bg-white shadow-sm p-5"
            >
                <div
                    class="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-4"
                >
                    <div
                        class="relative rounded-2xl border border-slate-200 bg-white shadow-sm p-4"
                    >
                        <div class="flex items-center gap-2 mb-1">
                            <div
                                class="h-2 w-2 rounded-full bg-emerald-500"
                            ></div>
                            <h3 class="font-semibold">Браузер менеджера</h3>
                        </div>
                        <p class="text-sm text-slate-600">
                            SvelteKit CRM (RBAC)
                        </p>
                    </div>
                    <div class="flex justify-center">
                        <svg
                            width="60"
                            height="20"
                            viewBox="0 0 60 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <use href="#arrowhead-right" />
                        </svg>
                    </div>
                    <div
                        class="relative rounded-2xl border border-slate-200 bg-white shadow-sm p-4"
                    >
                        <div class="flex items-center gap-2 mb-1">
                            <div
                                class="h-2 w-2 rounded-full bg-emerald-500"
                            ></div>
                            <h3 class="font-semibold">Backend API (admin)</h3>
                        </div>
                        <p class="text-sm text-slate-600">
                            Fastify — админские эндпоинты + WS для чата
                        </p>
                    </div>
                    <div class="flex justify-center">
                        <svg
                            width="60"
                            height="20"
                            viewBox="0 0 60 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <use href="#arrowhead-right" />
                        </svg>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div
                            class="relative rounded-2xl border border-slate-200 bg-white shadow-sm p-4"
                        >
                            <div class="flex items-center gap-2 mb-1">
                                <div
                                    class="h-2 w-2 rounded-full bg-emerald-500"
                                ></div>
                                <h3 class="font-semibold">
                                    PostgreSQL (read/write)
                                </h3>
                            </div>
                            <p class="text-sm text-slate-600">
                                правила цен (pricing), счета, заказы, чат
                            </p>
                        </div>
                        <div
                            class="relative rounded-2xl border border-slate-200 bg-white shadow-sm p-4"
                        >
                            <div class="flex items-center gap-2 mb-1">
                                <div
                                    class="h-2 w-2 rounded-full bg-emerald-500"
                                ></div>
                                <h3 class="font-semibold">
                                    NATS (publish/sub)
                                </h3>
                            </div>
                            <p class="text-sm text-slate-600">
                                cmd: supplier.order.create; events: bill.updated
                            </p>
                        </div>
                    </div>
                </div>

                <div
                    class="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-4 mt-6"
                >
                    <div></div>
                    <div class="hidden lg:block"></div>
                    <div
                        class="relative rounded-2xl border border-slate-200 bg-white shadow-sm p-4"
                    >
                        <div class="flex items-center gap-2 mb-1">
                            <div
                                class="h-2 w-2 rounded-full bg-emerald-500"
                            ></div>
                            <h3 class="font-semibold">OpenSearch (read)</h3>
                        </div>
                        <p class="text-sm text-slate-600">
                            поиск по каталогу из админки (модерация)
                        </p>
                    </div>
                    <div class="flex justify-center">
                        <svg
                            width="60"
                            height="20"
                            viewBox="0 0 60 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <use href="#arrowhead-right" />
                        </svg>
                    </div>
                    <div
                        class="relative rounded-2xl border border-slate-200 bg-white shadow-sm p-4"
                    >
                        <div class="flex items-center gap-2 mb-1">
                            <div
                                class="h-2 w-2 rounded-full bg-emerald-500"
                            ></div>
                            <h3 class="font-semibold">MinIO/CDN (read)</h3>
                        </div>
                        <p class="text-sm text-slate-600">
                            медиа карточек, сертификаты
                        </p>
                    </div>
                </div>

                <div
                    class="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-4 mt-6"
                >
                    <div></div>
                    <div class="hidden lg:block"></div>
                    <div
                        class="relative rounded-2xl border border-slate-200 bg-white shadow-sm p-4"
                    >
                        <div class="flex items-center gap-2 mb-1">
                            <div
                                class="h-2 w-2 rounded-full bg-emerald-500"
                            ></div>
                            <h3 class="font-semibold">Платёжки поставщиков</h3>
                        </div>
                        <p class="text-sm text-slate-600">
                            счета/накладные вне API поставщика (ручная оплата)
                        </p>
                    </div>
                    <div class="flex justify-center">
                        <svg
                            width="60"
                            height="20"
                            viewBox="0 0 60 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <use href="#arrowhead-right" />
                        </svg>
                    </div>
                    <div
                        class="relative rounded-2xl border border-slate-200 bg-white shadow-sm p-4"
                    >
                        <div class="flex items-center gap-2 mb-1">
                            <div
                                class="h-2 w-2 rounded-full bg-emerald-500"
                            ></div>
                            <h3 class="font-semibold">Отчётность</h3>
                        </div>
                        <p class="text-sm text-slate-600">
                            Postgres (и/или ClickHouse) → дашборды
                        </p>
                    </div>
                </div>

                <p class="text-xs text-slate-500 mt-2">
                    Действия менеджера (создать заказ у поставщика) → publish в
                    NATS → ETL вызывает API поставщика → обновляет Postgres,
                    шлёт events для UI.
                </p>
            </div>
        </section>

        <!-- ==== ETL ==== -->
        <section id="etl" class="mt-14 scroll-mt-24">
            <div class="mb-3">
                <h2 class="text-lg font-semibold text-slate-700">
                    ETL (Go): источники и назначения
                </h2>
            </div>

            <div
                class="rounded-2xl border border-slate-200 bg-white shadow-sm p-5"
            >
                <div
                    class="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-4"
                >
                    <div
                        class="relative rounded-2xl border border-slate-200 bg-white shadow-sm p-4"
                    >
                        <div class="flex items-center gap-2 mb-1">
                            <div
                                class="h-2 w-2 rounded-full bg-emerald-500"
                            ></div>
                            <h3 class="font-semibold">Поставщики</h3>
                        </div>
                        <p class="text-sm text-slate-600 mb-3">
                            Treolan (REST), VTT (SOAP), парсинг
                        </p>
                        <span
                            class="inline-block text-xs bg-slate-100 border border-slate-200 rounded-full px-2 py-0.5 mr-1 mb-1"
                            >Каталоги/категории</span
                        >
                        <span
                            class="inline-block text-xs bg-slate-100 border border-slate-200 rounded-full px-2 py-0.5 mr-1 mb-1"
                            >Runtime цены/остатки</span
                        >
                        <span
                            class="inline-block text-xs bg-slate-100 border border-slate-200 rounded-full px-2 py-0.5 mr-1 mb-1"
                            >Медиа/сертификаты</span
                        >
                    </div>
                    <div class="flex justify-center">
                        <svg
                            width="60"
                            height="20"
                            viewBox="0 0 60 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <use href="#arrowhead-right" />
                        </svg>
                    </div>
                    <div
                        class="relative rounded-2xl border border-slate-200 bg-white shadow-sm p-4"
                    >
                        <div class="flex items-center gap-2 mb-1">
                            <div
                                class="h-2 w-2 rounded-full bg-emerald-500"
                            ></div>
                            <h3 class="font-semibold">ETL Воркеры (Go)</h3>
                        </div>
                        <p class="text-sm text-slate-600 mb-3">
                            fetch → normalize → dedup → price → publish
                        </p>
                        <ul class="list-disc pl-5 space-y-1 text-sm">
                            <li>Retry/backoff, лимиты, SLA на коннекторы</li>
                            <li>Бренд/категория мэппинг, мердж офферов</li>
                            <li>Правила ценообразования (pricing)</li>
                        </ul>
                    </div>
                    <div class="flex justify-center">
                        <svg
                            width="60"
                            height="20"
                            viewBox="0 0 60 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <use href="#arrowhead-right" />
                        </svg>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div
                            class="relative rounded-2xl border border-slate-200 bg-white shadow-sm p-4"
                        >
                            <div class="flex items-center gap-2 mb-1">
                                <div
                                    class="h-2 w-2 rounded-full bg-emerald-500"
                                ></div>
                                <h3 class="font-semibold">
                                    PostgreSQL (write)
                                </h3>
                            </div>
                            <p class="text-sm text-slate-600">
                                catalog/offers/pricing
                            </p>
                        </div>
                        <div
                            class="relative rounded-2xl border border-slate-200 bg-white shadow-sm p-4"
                        >
                            <div class="flex items-center gap-2 mb-1">
                                <div
                                    class="h-2 w-2 rounded-full bg-emerald-500"
                                ></div>
                                <h3 class="font-semibold">NATS (publish)</h3>
                            </div>
                            <p class="text-sm text-slate-600">
                                events: offers.updated, price.updated
                            </p>
                        </div>
                    </div>
                </div>

                <div
                    class="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-4 mt-6"
                >
                    <div></div>
                    <div class="hidden lg:block"></div>
                    <div
                        class="relative rounded-2xl border border-slate-200 bg-white shadow-sm p-4"
                    >
                        <div class="flex items-center gap-2 mb-1">
                            <div
                                class="h-2 w-2 rounded-full bg-emerald-500"
                            ></div>
                            <h3 class="font-semibold">OpenSearch (write)</h3>
                        </div>
                        <p class="text-sm text-slate-600">
                            Δ-индексация каталога/фасетов
                        </p>
                    </div>
                    <div class="flex justify-center">
                        <svg
                            width="60"
                            height="20"
                            viewBox="0 0 60 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <use href="#arrowhead-right" />
                        </svg>
                    </div>
                    <div
                        class="relative rounded-2xl border border-slate-200 bg-white shadow-sm p-4"
                    >
                        <div class="flex items-center gap-2 mb-1">
                            <div
                                class="h-2 w-2 rounded-full bg-emerald-500"
                            ></div>
                            <h3 class="font-semibold">MinIO (write) + CDN</h3>
                        </div>
                        <p class="text-sm text-slate-600">
                            скачать/конвертировать медиа → загрузить
                        </p>
                    </div>
                </div>

                <p class="text-xs text-slate-500 mt-2">
                    Команды из CRM: <code>supplier.order.create</code>/<code
                        >bill.create</code
                    >
                    → ETL вызывает API поставщика, пишет статус/счёт в Postgres,
                    публикует <code>bill.updated</code>.
                </p>
            </div>
        </section>

        <!-- ==== SCREENSHOT ==== -->
        <section id="screenshot" class="mt-14 scroll-mt-24">
            <div class="mb-3">
                <h2 class="text-lg font-semibold text-slate-700">
                    Скриншот/превью для заказчика
                </h2>
            </div>
            <div
                class="rounded-2xl border border-slate-200 bg-white shadow-sm p-5"
            >
                <p class="text-sm text-slate-600 mb-3">
                    Демонстрация в <a
                        href="https://excalidraw.com/#room=197a1f2dba8d55b0ba54,u9Wn2EpMpz1lPOXYqXALqA"
                        target="_blank"
                        class="text-sky-800">Excalidraw</a
                    >.
                </p>

                <img
                    src={diagram}
                    alt="Скриншот архитектуры"
                    class="w-full rounded-xl border"
                />
            </div>
        </section>

        <footer class="mt-12 text-xs text-slate-500">
            *Keycloak — опционально, если потребуется SSO/LDAP. Выдача списков —
            из OpenSearch; детали/финансы — из Postgres; кэширование —
            Dragonfly; события/команды — NATS.
        </footer>
    </div>
</div>

<style>
    /* Небольшие правки без Tailwind, если нужно */
</style>
