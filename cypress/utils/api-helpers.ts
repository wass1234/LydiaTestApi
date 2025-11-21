/**
 * API Helper utilities for Reqres.in API testing
 */

export const API_ENDPOINTS = {
  USERS: '/api/users',
  USER_BY_ID: (id: number) => `/api/users/${id}`,
} as const;

export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
} as const;

/**
 * Validates ISO 8601 date format
 */
export function isValidISO8601(dateString: string): boolean {
  const iso8601Regex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/;
  return iso8601Regex.test(dateString);
}

