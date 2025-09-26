export interface InventoryItem {
  id: string
  name: string
  quantity: string
  unit: string
  category: string
  expiryDate: string
  addedDate: string
  daysLeft: number
  usedQuantity?: string
  notes?: string
  userId?: string
}

export interface Recipe {
  id: string
  name: string
  description: string
  cookTime: string
  prepTime: string
  servings: number
  difficulty: "Easy" | "Medium" | "Hard"
  cuisine: string
  ingredients: string[]
  instructions: string[]
  tags: string[]
  rating: number
  isFavorite: boolean
  canMakeWithInventory: boolean
  missingIngredients: string[]
  image?: string
  calories?: number
  protein?: string
  carbs?: string
  fat?: string
  dietaryLabels?: string[]
  nutritionScore?: number
  userId?: string
}

export interface ShoppingItem {
  id: string
  name: string
  category: string
  quantity: string
  unit: string
  isCompleted: boolean
  addedDate: string
  source: "manual" | "recipe" | "meal-plan"
  recipeId?: string
  priority?: "low" | "medium" | "high"
  userId?: string
}

export interface MealPlan {
  id: string
  date: string
  mealType: "breakfast" | "lunch" | "dinner" | "snack"
  recipeId: string
  recipeName: string
  servings: number
  userId?: string
}

export interface NotificationSettings {
  id?: string
  expiryAlerts: boolean
  mealPlanReminders: boolean
  shoppingReminders: boolean
  wasteReductionTips: boolean
  emailNotifications: boolean
  userId?: string
}

export interface User {
  id: string
  email: string
  name: string
  createdAt: string
  updatedAt: string
}

// API Response types
export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

// API Request types
export interface CreateInventoryItemRequest {
  name: string
  quantity: string
  unit: string
  category: string
  expiryDate: string
  notes?: string
}

export interface UpdateInventoryItemRequest extends Partial<CreateInventoryItemRequest> {
  usedQuantity?: string
}

export interface CreateShoppingItemRequest {
  name: string
  category: string
  quantity: string
  unit: string
  source: "manual" | "recipe" | "meal-plan"
  recipeId?: string
  priority?: "low" | "medium" | "high"
}

export interface CreateMealPlanRequest {
  date: string
  mealType: "breakfast" | "lunch" | "dinner" | "snack"
  recipeId: string
  recipeName: string
  servings: number
}

export interface RecipeFilterRequest {
  cuisine?: string
  difficulty?: string
  cookTime?: string
  dietary?: string
  search?: string
  canMakeWithInventory?: boolean
}

export interface PurchasedItem {
  id: string
  name: string
  quantity: string
  unit: string
  price?: number
  purchasedAt: string
  userId?: string
}
