// Helper function to handle errors
export const getErrorMessage = (error: unknown): string | undefined => {
    if (error instanceof Error) {
        return error.message.split(':')[0];
    }
    return String(error);
}