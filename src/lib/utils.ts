import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// 스크롤 유틸리티 함수
export function scrollToElement(elementId: string) {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

// 이메일 유효성 검사
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// 전화번호 유효성 검사
export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^[0-9-+\s()]+$/;
  return phoneRegex.test(phone);
}

// 연락처 유효성 검사 (이메일 또는 전화번호)
export function isValidContact(contact: string): boolean {
  return isValidEmail(contact) || isValidPhone(contact);
}
