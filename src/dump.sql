--
-- PostgreSQL database dump
--

-- Dumped from database version 12.11 (Ubuntu 12.11-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.11 (Ubuntu 12.11-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: links; Type: TABLE; Schema: public; Owner: adoleta
--

CREATE TABLE public.links (
    id integer NOT NULL,
    url text NOT NULL,
    "shortUrl" text NOT NULL,
    "visitCount" bigint DEFAULT '0'::bigint NOT NULL,
    "userId" integer NOT NULL,
    "createdAt" timestamp without time zone DEFAULT '2022-08-02 04:37:37.22302'::timestamp without time zone NOT NULL
);


ALTER TABLE public.links OWNER TO adoleta;

--
-- Name: links_id_seq; Type: SEQUENCE; Schema: public; Owner: adoleta
--

CREATE SEQUENCE public.links_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.links_id_seq OWNER TO adoleta;

--
-- Name: links_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: adoleta
--

ALTER SEQUENCE public.links_id_seq OWNED BY public.links.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: adoleta
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    "createdAt" timestamp without time zone DEFAULT '2022-08-02 02:23:11.24953'::timestamp without time zone NOT NULL
);


ALTER TABLE public.users OWNER TO adoleta;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: adoleta
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO adoleta;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: adoleta
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: links id; Type: DEFAULT; Schema: public; Owner: adoleta
--

ALTER TABLE ONLY public.links ALTER COLUMN id SET DEFAULT nextval('public.links_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: adoleta
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: links; Type: TABLE DATA; Schema: public; Owner: adoleta
--

COPY public.links (id, url, "shortUrl", "visitCount", "userId", "createdAt") FROM stdin;
6	https://bootcampra.notion.site/Projeto-Shortly-API-4ffa110c0ebd4e83ad7302cfafd33133	ozpSQeOkCT	0	1	2022-08-02 04:37:37.22302
7	https://bootcampra.notion.site/Projeto-Shortly-API-4ffa110c0ebd4e83ad7302cfafd33133	iQ1f4gF4pI	0	1	2022-08-02 04:37:37.22302
8	https://bootcampra.notion.site/Projeto-Shortly-API-4ffa110c0ebd4e83ad7302cfafd33133	ajRU6NR7Zv	3	1	2022-08-02 04:37:37.22302
5	https://bootcampra.notion.site/Projeto-Shortly-API-4ffa110c0ebd4e83ad7302cfafd33133	ddriweRV9V	1	1	2022-08-02 04:37:37.22302
9	https://bootcampra.notion.site/Projeto-Shortly-API-4ffa110c0ebd4e83ad7302cfafd33133	cLcNZgzBCf	0	3	2022-08-02 04:37:37.22302
10	https://bootcampra.notion.site/Projeto-Shortly-API-4ffa110c0ebd4e83ad7302cfafd33133	zFyROkjK8V	0	3	2022-08-02 04:37:37.22302
11	https://bootcampra.notion.site/Projeto-Shortly-API-4ffa110c0ebd4e83ad7302cfafd33133	0lhSTmL9j5	0	3	2022-08-02 04:37:37.22302
12	https://bootcampra.notion.site/Projeto-Shortly-API-4ffa110c0ebd4e83ad7302cfafd33133	8MSaGcno1M	4	3	2022-08-02 04:37:37.22302
14	https://bootcampra.notion.site/Projeto-Shortly-API-4ffa110c0ebd4e83ad7302cfafd33133	PttsFD8Hdt	1	15	2022-08-02 04:37:37.22302
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: adoleta
--

COPY public.users (id, name, email, password, "createdAt") FROM stdin;
1	João	joao@driven.com.br	$2b$10$7QabvqRcmoeZ27FSOZGOWeE6h4.Vvcll2vm0N70LrmwhT9sLi4UGq	2022-08-02 02:23:11.24953
3	Adoleta	adoleta@driven.com.br	$2b$10$3SCFAXyjmCgZOxalWYJbJ.aorY1rDhPCP87zUexmKjHTDmx5nhHvC	2022-08-02 02:23:11.24953
4	Dada	dada@driven.com.br	$2b$10$1NPiTLU90Y4H7Ry.Yp1DhOr4m7Ou6Y05ttEU2OEZNlFZh.0I2YWmG	2022-08-02 02:23:11.24953
5	dsds	dsds@driven.com.br	$2b$10$u747iRqAVQk5sCaU4BwDbeizd2Pmyf4ERy0Doqkp5UtPK7bxsLQaW	2022-08-02 02:23:11.24953
6	as	dsasds@driven.com.br	$2b$10$KiMn4fNfDrcQZWTOZQwqWu0l3PLFGJPHssERDOxiMpuAzTZJqOjbG	2022-08-02 02:23:11.24953
7	as	dsasdeds@driven.com.br	$2b$10$WZxtj7HodmUufFwwMZwQsutsGddCHGGhF0gs6Rh7ls8nckeIjzguS	2022-08-02 02:23:11.24953
8	as	dsasqdeds@driven.com.br	$2b$10$gLaSrnRVkOS0YgertKtzM.WkMXWTifgTE57QDTidDDgM41BuASjiy	2022-08-02 02:23:11.24953
9	as	dsasqdeeds@driven.com.br	$2b$10$Ie1FkqKngXvRWHCHbaLJ3O7d8Ez4fyepRLyN3KaiovdZnmiCe/DCK	2022-08-02 02:23:11.24953
10	as	dsasqdaeeds@driven.com.br	$2b$10$ZKa2iwchLFW/6P5C4vf6YudHcSdFIhWDw2TBNIoy7LNv/ip.RkwmW	2022-08-02 02:23:11.24953
11	as	dsaxsqdaeeds@driven.com.br	$2b$10$OtGbYeKFSyQFKh4E5Mc62e51EwIvM63nuPS66i7w33GLE/lPjbNWy	2022-08-02 02:23:11.24953
12	as	dsaxsqdfaeeds@driven.com.br	$2b$10$kPwizBLaJclFzOMlXbAzJe73KS1N.u8uLbqyF3.bOdEqcE4BiFr..	2022-08-02 02:23:11.24953
13	as	dsaxsqdfateeds@driven.com.br	$2b$10$eAm3z0AfIIItJSGgoAYka.W0mSO0x4yWVjNPQ3pHsnJElEeFneER6	2022-08-02 02:23:11.24953
14	as	dsaxsqdfatewqeeds@driven.com.br	$2b$10$yTKyKht.Snl/x/QO2sosh.g/UNsXf7DLJtu3f.z0IQiqyF4i/2UDW	2022-08-02 02:23:11.24953
15	jogador	jogador@driven.com.br	$2b$10$tBl4GuLZsffmd7AqZbMR.uY2oPHUiizmXRBdBgb66iZ9hDYQsYVp.	2022-08-02 02:23:11.24953
16	adasd	asdasd@driven.com.br	$2b$10$Adm5KyNf3EETrSxOeO3TWec9Vzg72ravwhb6LROyoA3xMlBRVDxjK	2022-08-02 02:23:11.24953
\.


--
-- Name: links_id_seq; Type: SEQUENCE SET; Schema: public; Owner: adoleta
--

SELECT pg_catalog.setval('public.links_id_seq', 14, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: adoleta
--

SELECT pg_catalog.setval('public.users_id_seq', 16, true);


--
-- Name: links links_pk; Type: CONSTRAINT; Schema: public; Owner: adoleta
--

ALTER TABLE ONLY public.links
    ADD CONSTRAINT links_pk PRIMARY KEY (id);


--
-- Name: links links_shortUrl_key; Type: CONSTRAINT; Schema: public; Owner: adoleta
--

ALTER TABLE ONLY public.links
    ADD CONSTRAINT "links_shortUrl_key" UNIQUE ("shortUrl");


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: adoleta
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pk; Type: CONSTRAINT; Schema: public; Owner: adoleta
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pk PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

