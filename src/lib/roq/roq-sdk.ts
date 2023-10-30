/* eslint-disable */
import { type CheckSelect, fetcher, marshal, makeUrl, RoqPlatformClient, BrowserCookieAuth } from '@roq/client';
import { Fetcher, SWRConfiguration } from 'swr';
import type { Prisma, event, movie, review, ticket, user, vendor } from './types';
import { DefaultArgs, GetFindResult } from './types/runtime/library';

export type RequestOptions = Record<string, any>;
export type SWRRequestOptions<Result, Error = any> = {
  disabled?: boolean;
  initialData?: Result;
} & SWRConfiguration<Result, Error, Fetcher<Result>>;

export const defaultEndpoint = process.env.NEXT_PUBLIC_API_URL || process.env.API_URL;

interface EventSDK {
  create: <T extends Prisma.eventCreateArgs, R extends CheckSelect<T, event, Prisma.eventGetPayload<T>>>(
    data: Prisma.SelectSubset<T, Prisma.eventCreateArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  createMany: <T extends Prisma.eventCreateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.eventCreateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  update: <T extends Prisma.eventUpdateArgs, R extends Prisma.eventGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.eventUpdateArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  updateMany: <T extends Prisma.eventUpdateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.eventUpdateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  upsert: <T extends Prisma.eventUpsertArgs, R extends Prisma.eventGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.eventUpsertArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  delete: <T extends Prisma.eventDeleteArgs, R extends Prisma.eventGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.eventDeleteArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  deleteMany: <T extends Prisma.eventDeleteManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.eventDeleteManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findMany: <T extends Prisma.eventFindManyArgs, R extends GetFindResult<Prisma.$eventPayload<DefaultArgs>, T>[]>(
    args: Prisma.SelectSubset<T, Prisma.eventFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  count: <T extends Prisma.eventCountArgs, R extends number>(
    args: Prisma.SelectSubset<T, Prisma.eventCountArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findManyWithCount: <
    T extends Prisma.eventFindManyArgs,
    R extends GetFindResult<Prisma.$eventPayload<DefaultArgs>, T>[],
    C extends number,
  >(
    args: Prisma.SelectSubset<T, Prisma.eventFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<{ data: R; count: C }>;

  findFirst: <T extends Prisma.eventFindFirstArgs, R extends GetFindResult<Prisma.$eventPayload<DefaultArgs>, T>>(
    args?: Prisma.SelectSubset<T, Prisma.eventFindFirstArgs>,
    options?: RequestOptions,
  ) => Promise<R>;
}

interface MovieSDK {
  create: <T extends Prisma.movieCreateArgs, R extends CheckSelect<T, movie, Prisma.movieGetPayload<T>>>(
    data: Prisma.SelectSubset<T, Prisma.movieCreateArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  createMany: <T extends Prisma.movieCreateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.movieCreateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  update: <T extends Prisma.movieUpdateArgs, R extends Prisma.movieGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.movieUpdateArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  updateMany: <T extends Prisma.movieUpdateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.movieUpdateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  upsert: <T extends Prisma.movieUpsertArgs, R extends Prisma.movieGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.movieUpsertArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  delete: <T extends Prisma.movieDeleteArgs, R extends Prisma.movieGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.movieDeleteArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  deleteMany: <T extends Prisma.movieDeleteManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.movieDeleteManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findMany: <T extends Prisma.movieFindManyArgs, R extends GetFindResult<Prisma.$moviePayload<DefaultArgs>, T>[]>(
    args: Prisma.SelectSubset<T, Prisma.movieFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  count: <T extends Prisma.movieCountArgs, R extends number>(
    args: Prisma.SelectSubset<T, Prisma.movieCountArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findManyWithCount: <
    T extends Prisma.movieFindManyArgs,
    R extends GetFindResult<Prisma.$moviePayload<DefaultArgs>, T>[],
    C extends number,
  >(
    args: Prisma.SelectSubset<T, Prisma.movieFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<{ data: R; count: C }>;

  findFirst: <T extends Prisma.movieFindFirstArgs, R extends GetFindResult<Prisma.$moviePayload<DefaultArgs>, T>>(
    args?: Prisma.SelectSubset<T, Prisma.movieFindFirstArgs>,
    options?: RequestOptions,
  ) => Promise<R>;
}

interface ReviewSDK {
  create: <T extends Prisma.reviewCreateArgs, R extends CheckSelect<T, review, Prisma.reviewGetPayload<T>>>(
    data: Prisma.SelectSubset<T, Prisma.reviewCreateArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  createMany: <T extends Prisma.reviewCreateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.reviewCreateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  update: <T extends Prisma.reviewUpdateArgs, R extends Prisma.reviewGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.reviewUpdateArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  updateMany: <T extends Prisma.reviewUpdateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.reviewUpdateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  upsert: <T extends Prisma.reviewUpsertArgs, R extends Prisma.reviewGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.reviewUpsertArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  delete: <T extends Prisma.reviewDeleteArgs, R extends Prisma.reviewGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.reviewDeleteArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  deleteMany: <T extends Prisma.reviewDeleteManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.reviewDeleteManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findMany: <T extends Prisma.reviewFindManyArgs, R extends GetFindResult<Prisma.$reviewPayload<DefaultArgs>, T>[]>(
    args: Prisma.SelectSubset<T, Prisma.reviewFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  count: <T extends Prisma.reviewCountArgs, R extends number>(
    args: Prisma.SelectSubset<T, Prisma.reviewCountArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findManyWithCount: <
    T extends Prisma.reviewFindManyArgs,
    R extends GetFindResult<Prisma.$reviewPayload<DefaultArgs>, T>[],
    C extends number,
  >(
    args: Prisma.SelectSubset<T, Prisma.reviewFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<{ data: R; count: C }>;

  findFirst: <T extends Prisma.reviewFindFirstArgs, R extends GetFindResult<Prisma.$reviewPayload<DefaultArgs>, T>>(
    args?: Prisma.SelectSubset<T, Prisma.reviewFindFirstArgs>,
    options?: RequestOptions,
  ) => Promise<R>;
}

interface TicketSDK {
  create: <T extends Prisma.ticketCreateArgs, R extends CheckSelect<T, ticket, Prisma.ticketGetPayload<T>>>(
    data: Prisma.SelectSubset<T, Prisma.ticketCreateArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  createMany: <T extends Prisma.ticketCreateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.ticketCreateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  update: <T extends Prisma.ticketUpdateArgs, R extends Prisma.ticketGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.ticketUpdateArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  updateMany: <T extends Prisma.ticketUpdateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.ticketUpdateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  upsert: <T extends Prisma.ticketUpsertArgs, R extends Prisma.ticketGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.ticketUpsertArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  delete: <T extends Prisma.ticketDeleteArgs, R extends Prisma.ticketGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.ticketDeleteArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  deleteMany: <T extends Prisma.ticketDeleteManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.ticketDeleteManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findMany: <T extends Prisma.ticketFindManyArgs, R extends GetFindResult<Prisma.$ticketPayload<DefaultArgs>, T>[]>(
    args: Prisma.SelectSubset<T, Prisma.ticketFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  count: <T extends Prisma.ticketCountArgs, R extends number>(
    args: Prisma.SelectSubset<T, Prisma.ticketCountArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findManyWithCount: <
    T extends Prisma.ticketFindManyArgs,
    R extends GetFindResult<Prisma.$ticketPayload<DefaultArgs>, T>[],
    C extends number,
  >(
    args: Prisma.SelectSubset<T, Prisma.ticketFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<{ data: R; count: C }>;

  findFirst: <T extends Prisma.ticketFindFirstArgs, R extends GetFindResult<Prisma.$ticketPayload<DefaultArgs>, T>>(
    args?: Prisma.SelectSubset<T, Prisma.ticketFindFirstArgs>,
    options?: RequestOptions,
  ) => Promise<R>;
}

interface UserSDK {
  create: <T extends Prisma.userCreateArgs, R extends CheckSelect<T, user, Prisma.userGetPayload<T>>>(
    data: Prisma.SelectSubset<T, Prisma.userCreateArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  createMany: <T extends Prisma.userCreateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.userCreateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  update: <T extends Prisma.userUpdateArgs, R extends Prisma.userGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.userUpdateArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  updateMany: <T extends Prisma.userUpdateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.userUpdateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  upsert: <T extends Prisma.userUpsertArgs, R extends Prisma.userGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.userUpsertArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  delete: <T extends Prisma.userDeleteArgs, R extends Prisma.userGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.userDeleteArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  deleteMany: <T extends Prisma.userDeleteManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.userDeleteManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findMany: <T extends Prisma.userFindManyArgs, R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>[]>(
    args: Prisma.SelectSubset<T, Prisma.userFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  count: <T extends Prisma.userCountArgs, R extends number>(
    args: Prisma.SelectSubset<T, Prisma.userCountArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findManyWithCount: <
    T extends Prisma.userFindManyArgs,
    R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>[],
    C extends number,
  >(
    args: Prisma.SelectSubset<T, Prisma.userFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<{ data: R; count: C }>;

  findFirst: <T extends Prisma.userFindFirstArgs, R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>>(
    args?: Prisma.SelectSubset<T, Prisma.userFindFirstArgs>,
    options?: RequestOptions,
  ) => Promise<R>;
}

interface VendorSDK {
  create: <T extends Prisma.vendorCreateArgs, R extends CheckSelect<T, vendor, Prisma.vendorGetPayload<T>>>(
    data: Prisma.SelectSubset<T, Prisma.vendorCreateArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  createMany: <T extends Prisma.vendorCreateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.vendorCreateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  update: <T extends Prisma.vendorUpdateArgs, R extends Prisma.vendorGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.vendorUpdateArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  updateMany: <T extends Prisma.vendorUpdateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.vendorUpdateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  upsert: <T extends Prisma.vendorUpsertArgs, R extends Prisma.vendorGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.vendorUpsertArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  delete: <T extends Prisma.vendorDeleteArgs, R extends Prisma.vendorGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.vendorDeleteArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  deleteMany: <T extends Prisma.vendorDeleteManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.vendorDeleteManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findMany: <T extends Prisma.vendorFindManyArgs, R extends GetFindResult<Prisma.$vendorPayload<DefaultArgs>, T>[]>(
    args: Prisma.SelectSubset<T, Prisma.vendorFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  count: <T extends Prisma.vendorCountArgs, R extends number>(
    args: Prisma.SelectSubset<T, Prisma.vendorCountArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findManyWithCount: <
    T extends Prisma.vendorFindManyArgs,
    R extends GetFindResult<Prisma.$vendorPayload<DefaultArgs>, T>[],
    C extends number,
  >(
    args: Prisma.SelectSubset<T, Prisma.vendorFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<{ data: R; count: C }>;

  findFirst: <T extends Prisma.vendorFindFirstArgs, R extends GetFindResult<Prisma.$vendorPayload<DefaultArgs>, T>>(
    args?: Prisma.SelectSubset<T, Prisma.vendorFindFirstArgs>,
    options?: RequestOptions,
  ) => Promise<R>;
}

export class RoqClient extends RoqPlatformClient {
  private endpoint: string;
  private baseOptions: RequestOptions;

  public event: EventSDK;

  public movie: MovieSDK;

  public review: ReviewSDK;

  public ticket: TicketSDK;

  public user: UserSDK;

  public vendor: VendorSDK;

  constructor(backendHost: string, platformHost: string, baseOptions: RequestOptions = {}) {
    super({
      host: platformHost,
      auth: new BrowserCookieAuth(),
    });
    this.endpoint = backendHost;
    this.baseOptions = baseOptions;
    this.initSDK();
  }

  private initSDK() {
    const ctx = this;

    this.event = {
      create: async function createEvent<
        T extends Prisma.eventCreateArgs,
        R extends CheckSelect<T, event, Prisma.eventGetPayload<T>>,
      >(data: Prisma.SelectSubset<T, Prisma.eventCreateArgs>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/event/create`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      createMany: async function createManyEvent<T extends Prisma.eventCreateManyArgs, R extends Prisma.BatchPayload>(
        data: Prisma.SelectSubset<T, Prisma.eventCreateManyArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/event/createMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      update: async function updateEvent<T extends Prisma.eventUpdateArgs, R extends Prisma.eventGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.eventUpdateArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/event/update`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      updateMany: async function updateManyEvent<T extends Prisma.eventUpdateManyArgs, R extends Prisma.BatchPayload>(
        data: Prisma.SelectSubset<T, Prisma.eventUpdateManyArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/event/updateMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      upsert: async function upsertEvent<T extends Prisma.eventUpsertArgs, R extends Prisma.eventGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.eventUpsertArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/event/upsert`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      delete: async function deleteEvent<T extends Prisma.eventDeleteArgs, R extends Prisma.eventGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.eventDeleteArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/event/delete`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, true>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          true,
        );
        return response;
      },
      deleteMany: async function deleteManyEvent<T extends Prisma.eventDeleteManyArgs, R extends Prisma.BatchPayload>(
        data: Prisma.SelectSubset<T, Prisma.eventDeleteManyArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/event/deleteMany`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, false>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findMany: async function findManyEvent<
        T extends Prisma.eventFindManyArgs,
        R extends GetFindResult<Prisma.$eventPayload<DefaultArgs>, T>[],
      >(args: Prisma.SelectSubset<T, Prisma.eventFindManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/event/findMany`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      count: async function countEvent<T extends Prisma.eventCountArgs, R extends number>(
        args: Prisma.SelectSubset<T, Prisma.eventCountArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/event/count`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findManyWithCount: async function findManyWithCountEvent<
        T extends Prisma.eventFindManyArgs,
        R extends GetFindResult<Prisma.$eventPayload<DefaultArgs>, T>[],
        C extends number,
      >(args: Prisma.SelectSubset<T, Prisma.eventFindManyArgs>, options?: RequestOptions) {
        const { distinct, orderBy, where } = args || {};
        const [data, count] = await Promise.all([
          ctx.event.findMany(args, options),
          ctx.event.count(
            {
              orderBy,
              where,
            },
            options,
          ),
        ]);
        return { data, count } as { data: R; count: C };
      },
      findFirst: async function findFirstEvent<
        T extends Prisma.eventFindFirstArgs,
        R extends GetFindResult<Prisma.$eventPayload<DefaultArgs>, T>,
      >(args?: Prisma.SelectSubset<T, Prisma.eventFindFirstArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/event/findFirst`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
    };

    this.movie = {
      create: async function createMovie<
        T extends Prisma.movieCreateArgs,
        R extends CheckSelect<T, movie, Prisma.movieGetPayload<T>>,
      >(data: Prisma.SelectSubset<T, Prisma.movieCreateArgs>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/movie/create`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      createMany: async function createManyMovie<T extends Prisma.movieCreateManyArgs, R extends Prisma.BatchPayload>(
        data: Prisma.SelectSubset<T, Prisma.movieCreateManyArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/movie/createMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      update: async function updateMovie<T extends Prisma.movieUpdateArgs, R extends Prisma.movieGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.movieUpdateArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/movie/update`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      updateMany: async function updateManyMovie<T extends Prisma.movieUpdateManyArgs, R extends Prisma.BatchPayload>(
        data: Prisma.SelectSubset<T, Prisma.movieUpdateManyArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/movie/updateMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      upsert: async function upsertMovie<T extends Prisma.movieUpsertArgs, R extends Prisma.movieGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.movieUpsertArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/movie/upsert`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      delete: async function deleteMovie<T extends Prisma.movieDeleteArgs, R extends Prisma.movieGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.movieDeleteArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/movie/delete`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, true>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          true,
        );
        return response;
      },
      deleteMany: async function deleteManyMovie<T extends Prisma.movieDeleteManyArgs, R extends Prisma.BatchPayload>(
        data: Prisma.SelectSubset<T, Prisma.movieDeleteManyArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/movie/deleteMany`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, false>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findMany: async function findManyMovie<
        T extends Prisma.movieFindManyArgs,
        R extends GetFindResult<Prisma.$moviePayload<DefaultArgs>, T>[],
      >(args: Prisma.SelectSubset<T, Prisma.movieFindManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/movie/findMany`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      count: async function countMovie<T extends Prisma.movieCountArgs, R extends number>(
        args: Prisma.SelectSubset<T, Prisma.movieCountArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/movie/count`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findManyWithCount: async function findManyWithCountMovie<
        T extends Prisma.movieFindManyArgs,
        R extends GetFindResult<Prisma.$moviePayload<DefaultArgs>, T>[],
        C extends number,
      >(args: Prisma.SelectSubset<T, Prisma.movieFindManyArgs>, options?: RequestOptions) {
        const { distinct, orderBy, where } = args || {};
        const [data, count] = await Promise.all([
          ctx.movie.findMany(args, options),
          ctx.movie.count(
            {
              orderBy,
              where,
            },
            options,
          ),
        ]);
        return { data, count } as { data: R; count: C };
      },
      findFirst: async function findFirstMovie<
        T extends Prisma.movieFindFirstArgs,
        R extends GetFindResult<Prisma.$moviePayload<DefaultArgs>, T>,
      >(args?: Prisma.SelectSubset<T, Prisma.movieFindFirstArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/movie/findFirst`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
    };

    this.review = {
      create: async function createReview<
        T extends Prisma.reviewCreateArgs,
        R extends CheckSelect<T, review, Prisma.reviewGetPayload<T>>,
      >(data: Prisma.SelectSubset<T, Prisma.reviewCreateArgs>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/review/create`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      createMany: async function createManyReview<T extends Prisma.reviewCreateManyArgs, R extends Prisma.BatchPayload>(
        data: Prisma.SelectSubset<T, Prisma.reviewCreateManyArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/review/createMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      update: async function updateReview<T extends Prisma.reviewUpdateArgs, R extends Prisma.reviewGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.reviewUpdateArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/review/update`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      updateMany: async function updateManyReview<T extends Prisma.reviewUpdateManyArgs, R extends Prisma.BatchPayload>(
        data: Prisma.SelectSubset<T, Prisma.reviewUpdateManyArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/review/updateMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      upsert: async function upsertReview<T extends Prisma.reviewUpsertArgs, R extends Prisma.reviewGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.reviewUpsertArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/review/upsert`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      delete: async function deleteReview<T extends Prisma.reviewDeleteArgs, R extends Prisma.reviewGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.reviewDeleteArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/review/delete`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, true>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          true,
        );
        return response;
      },
      deleteMany: async function deleteManyReview<T extends Prisma.reviewDeleteManyArgs, R extends Prisma.BatchPayload>(
        data: Prisma.SelectSubset<T, Prisma.reviewDeleteManyArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/review/deleteMany`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, false>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findMany: async function findManyReview<
        T extends Prisma.reviewFindManyArgs,
        R extends GetFindResult<Prisma.$reviewPayload<DefaultArgs>, T>[],
      >(args: Prisma.SelectSubset<T, Prisma.reviewFindManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/review/findMany`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      count: async function countReview<T extends Prisma.reviewCountArgs, R extends number>(
        args: Prisma.SelectSubset<T, Prisma.reviewCountArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/review/count`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findManyWithCount: async function findManyWithCountReview<
        T extends Prisma.reviewFindManyArgs,
        R extends GetFindResult<Prisma.$reviewPayload<DefaultArgs>, T>[],
        C extends number,
      >(args: Prisma.SelectSubset<T, Prisma.reviewFindManyArgs>, options?: RequestOptions) {
        const { distinct, orderBy, where } = args || {};
        const [data, count] = await Promise.all([
          ctx.review.findMany(args, options),
          ctx.review.count(
            {
              orderBy,
              where,
            },
            options,
          ),
        ]);
        return { data, count } as { data: R; count: C };
      },
      findFirst: async function findFirstReview<
        T extends Prisma.reviewFindFirstArgs,
        R extends GetFindResult<Prisma.$reviewPayload<DefaultArgs>, T>,
      >(args?: Prisma.SelectSubset<T, Prisma.reviewFindFirstArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/review/findFirst`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
    };

    this.ticket = {
      create: async function createTicket<
        T extends Prisma.ticketCreateArgs,
        R extends CheckSelect<T, ticket, Prisma.ticketGetPayload<T>>,
      >(data: Prisma.SelectSubset<T, Prisma.ticketCreateArgs>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/ticket/create`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      createMany: async function createManyTicket<T extends Prisma.ticketCreateManyArgs, R extends Prisma.BatchPayload>(
        data: Prisma.SelectSubset<T, Prisma.ticketCreateManyArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/ticket/createMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      update: async function updateTicket<T extends Prisma.ticketUpdateArgs, R extends Prisma.ticketGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.ticketUpdateArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/ticket/update`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      updateMany: async function updateManyTicket<T extends Prisma.ticketUpdateManyArgs, R extends Prisma.BatchPayload>(
        data: Prisma.SelectSubset<T, Prisma.ticketUpdateManyArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/ticket/updateMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      upsert: async function upsertTicket<T extends Prisma.ticketUpsertArgs, R extends Prisma.ticketGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.ticketUpsertArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/ticket/upsert`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      delete: async function deleteTicket<T extends Prisma.ticketDeleteArgs, R extends Prisma.ticketGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.ticketDeleteArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/ticket/delete`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, true>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          true,
        );
        return response;
      },
      deleteMany: async function deleteManyTicket<T extends Prisma.ticketDeleteManyArgs, R extends Prisma.BatchPayload>(
        data: Prisma.SelectSubset<T, Prisma.ticketDeleteManyArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/ticket/deleteMany`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, false>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findMany: async function findManyTicket<
        T extends Prisma.ticketFindManyArgs,
        R extends GetFindResult<Prisma.$ticketPayload<DefaultArgs>, T>[],
      >(args: Prisma.SelectSubset<T, Prisma.ticketFindManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/ticket/findMany`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      count: async function countTicket<T extends Prisma.ticketCountArgs, R extends number>(
        args: Prisma.SelectSubset<T, Prisma.ticketCountArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/ticket/count`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findManyWithCount: async function findManyWithCountTicket<
        T extends Prisma.ticketFindManyArgs,
        R extends GetFindResult<Prisma.$ticketPayload<DefaultArgs>, T>[],
        C extends number,
      >(args: Prisma.SelectSubset<T, Prisma.ticketFindManyArgs>, options?: RequestOptions) {
        const { distinct, orderBy, where } = args || {};
        const [data, count] = await Promise.all([
          ctx.ticket.findMany(args, options),
          ctx.ticket.count(
            {
              orderBy,
              where,
            },
            options,
          ),
        ]);
        return { data, count } as { data: R; count: C };
      },
      findFirst: async function findFirstTicket<
        T extends Prisma.ticketFindFirstArgs,
        R extends GetFindResult<Prisma.$ticketPayload<DefaultArgs>, T>,
      >(args?: Prisma.SelectSubset<T, Prisma.ticketFindFirstArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/ticket/findFirst`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
    };

    this.user = {
      create: async function createUser<
        T extends Prisma.userCreateArgs,
        R extends CheckSelect<T, user, Prisma.userGetPayload<T>>,
      >(data: Prisma.SelectSubset<T, Prisma.userCreateArgs>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/user/create`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      createMany: async function createManyUser<T extends Prisma.userCreateManyArgs, R extends Prisma.BatchPayload>(
        data: Prisma.SelectSubset<T, Prisma.userCreateManyArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/user/createMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      update: async function updateUser<T extends Prisma.userUpdateArgs, R extends Prisma.userGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.userUpdateArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/user/update`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      updateMany: async function updateManyUser<T extends Prisma.userUpdateManyArgs, R extends Prisma.BatchPayload>(
        data: Prisma.SelectSubset<T, Prisma.userUpdateManyArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/user/updateMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      upsert: async function upsertUser<T extends Prisma.userUpsertArgs, R extends Prisma.userGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.userUpsertArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/user/upsert`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      delete: async function deleteUser<T extends Prisma.userDeleteArgs, R extends Prisma.userGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.userDeleteArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/user/delete`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, true>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          true,
        );
        return response;
      },
      deleteMany: async function deleteManyUser<T extends Prisma.userDeleteManyArgs, R extends Prisma.BatchPayload>(
        data: Prisma.SelectSubset<T, Prisma.userDeleteManyArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/user/deleteMany`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, false>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findMany: async function findManyUser<
        T extends Prisma.userFindManyArgs,
        R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>[],
      >(args: Prisma.SelectSubset<T, Prisma.userFindManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/user/findMany`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      count: async function countUser<T extends Prisma.userCountArgs, R extends number>(
        args: Prisma.SelectSubset<T, Prisma.userCountArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/user/count`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findManyWithCount: async function findManyWithCountUser<
        T extends Prisma.userFindManyArgs,
        R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>[],
        C extends number,
      >(args: Prisma.SelectSubset<T, Prisma.userFindManyArgs>, options?: RequestOptions) {
        const { distinct, orderBy, where } = args || {};
        const [data, count] = await Promise.all([
          ctx.user.findMany(args, options),
          ctx.user.count(
            {
              orderBy,
              where,
            },
            options,
          ),
        ]);
        return { data, count } as { data: R; count: C };
      },
      findFirst: async function findFirstUser<
        T extends Prisma.userFindFirstArgs,
        R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>,
      >(args?: Prisma.SelectSubset<T, Prisma.userFindFirstArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/user/findFirst`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
    };

    this.vendor = {
      create: async function createVendor<
        T extends Prisma.vendorCreateArgs,
        R extends CheckSelect<T, vendor, Prisma.vendorGetPayload<T>>,
      >(data: Prisma.SelectSubset<T, Prisma.vendorCreateArgs>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/vendor/create`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      createMany: async function createManyVendor<T extends Prisma.vendorCreateManyArgs, R extends Prisma.BatchPayload>(
        data: Prisma.SelectSubset<T, Prisma.vendorCreateManyArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/vendor/createMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      update: async function updateVendor<T extends Prisma.vendorUpdateArgs, R extends Prisma.vendorGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.vendorUpdateArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/vendor/update`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      updateMany: async function updateManyVendor<T extends Prisma.vendorUpdateManyArgs, R extends Prisma.BatchPayload>(
        data: Prisma.SelectSubset<T, Prisma.vendorUpdateManyArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/vendor/updateMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      upsert: async function upsertVendor<T extends Prisma.vendorUpsertArgs, R extends Prisma.vendorGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.vendorUpsertArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/vendor/upsert`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      delete: async function deleteVendor<T extends Prisma.vendorDeleteArgs, R extends Prisma.vendorGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.vendorDeleteArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/vendor/delete`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, true>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          true,
        );
        return response;
      },
      deleteMany: async function deleteManyVendor<T extends Prisma.vendorDeleteManyArgs, R extends Prisma.BatchPayload>(
        data: Prisma.SelectSubset<T, Prisma.vendorDeleteManyArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/vendor/deleteMany`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, false>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findMany: async function findManyVendor<
        T extends Prisma.vendorFindManyArgs,
        R extends GetFindResult<Prisma.$vendorPayload<DefaultArgs>, T>[],
      >(args: Prisma.SelectSubset<T, Prisma.vendorFindManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/vendor/findMany`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      count: async function countVendor<T extends Prisma.vendorCountArgs, R extends number>(
        args: Prisma.SelectSubset<T, Prisma.vendorCountArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/vendor/count`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findManyWithCount: async function findManyWithCountVendor<
        T extends Prisma.vendorFindManyArgs,
        R extends GetFindResult<Prisma.$vendorPayload<DefaultArgs>, T>[],
        C extends number,
      >(args: Prisma.SelectSubset<T, Prisma.vendorFindManyArgs>, options?: RequestOptions) {
        const { distinct, orderBy, where } = args || {};
        const [data, count] = await Promise.all([
          ctx.vendor.findMany(args, options),
          ctx.vendor.count(
            {
              orderBy,
              where,
            },
            options,
          ),
        ]);
        return { data, count } as { data: R; count: C };
      },
      findFirst: async function findFirstVendor<
        T extends Prisma.vendorFindFirstArgs,
        R extends GetFindResult<Prisma.$vendorPayload<DefaultArgs>, T>,
      >(args?: Prisma.SelectSubset<T, Prisma.vendorFindFirstArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/vendor/findFirst`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
    };
  }
}
