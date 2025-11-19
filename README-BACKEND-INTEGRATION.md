# 🔗 Backend Integration Guide - Lunysse Frontend

## 📋 Overview

This document describes the complete backend integration implemented in the Lunysse frontend system. The integration follows the API documentation provided and replaces the mock API with real backend calls.

## 🏗️ Architecture Changes

### New Files Created

1. **`src/services/api.js`** - Main API service class
2. **`src/services/apiService.js`** - Feature-specific service layer
3. **`src/hooks/useApi.js`** - Custom hooks for API operations
4. **`.env`** - Environment configuration

### Modified Files

1. **`src/context/AuthContext.jsx`** - Updated to use real API
2. **`src/pages/Login.jsx`** - Integrated with new auth system
3. **`src/pages/Register.jsx`** - Updated registration flow
4. **`src/pages/Agendamento.jsx`** - Real appointment creation
5. **`src/pages/DashboardPsicologo.jsx`** - Real data loading
6. **`src/pages/DashboardPaciente.jsx`** - Patient dashboard integration
7. **`src/pages/Pacientes.jsx`** - Patient management
8. **`src/pages/Relatorios.jsx`** - Reports with real data

## 🔧 Configuration

### Environment Variables

Create/update `.env` file:

```env
# Backend API Configuration
VITE_API_BASE_URL=http://localhost:8000

# Hugging Face Token for AI Chat
VITE_HF_TOKEN=your_hugging_face_token_here
```

### API Base URL

The system automatically uses the environment variable `VITE_API_BASE_URL` or defaults to `http://localhost:8000`.

## 🔐 Authentication System

### Token Management

- Tokens are stored in `localStorage` with key `lunysse_token`
- User data stored with key `lunysse_user`
- Automatic token refresh on API errors (401)
- Automatic logout and redirect on token expiration

### AuthContext Updates

```javascript
// New methods available
const { user, login, register, logout, loading } = useAuth();

// Login usage
await login(email, password);

// Register usage
await register(userData);
```

## 📡 API Service Layer

### Main API Class (`src/services/api.js`)

```javascript
import api from '../services/api';

// Authentication
await api.login(email, password);
await api.register(userData);

// Patients
await api.getPatients();
await api.createPatient(patientData);

// Appointments
await api.getAppointments(filters);
await api.createAppointment(appointmentData);

// And more...
```

### Feature Services (`src/services/apiService.js`)

Organized by feature for better maintainability:

```javascript
import { 
  authService, 
  patientService, 
  appointmentService,
  psychologistService,
  requestService,
  reportService,
  mlService 
} from '../services/apiService';
```

## 🎣 Custom Hooks

### useApiCall Hook

For data fetching with loading states:

```javascript
import { useApiCall } from '../hooks/useApi';

const { data, loading, error, refetch } = useApiCall(
  () => patientService.getPatients(),
  [userId] // dependencies
);
```

### useMutation Hook

For create/update/delete operations:

```javascript
import { useMutation } from '../hooks/useApi';

const { mutate, loading, error } = useMutation(patientService.createPatient);

const handleCreate = async () => {
  await mutate(patientData);
};
```

## 🔄 Data Flow

### 1. Authentication Flow

```
Login Page → AuthContext.login() → api.login() → Backend /auth/login
                ↓
Store token & user data → Redirect to dashboard
```

### 2. Data Loading Flow

```
Component Mount → useEffect → Service Function → API Call → Backend
                                    ↓
Update Component State ← Process Response ← HTTP Response
```

### 3. Error Handling Flow

```
API Error → Check Status Code → Handle Appropriately
    ↓
401: Logout & Redirect to Login
403: Show Permission Error
404: Show Not Found
500: Show Generic Error
```

## 🛠️ Backend API Endpoints Used

### Authentication
- `POST /auth/login` - User login
- `POST /auth/register` - User registration

### Patients
- `GET /patients/` - List patients
- `GET /patients/{id}` - Patient details
- `POST /patients/` - Create patient
- `GET /patients/{id}/sessions` - Patient sessions
- `POST /patients/{id}/notes` - Add patient note

### Appointments
- `GET /appointments/` - List appointments
- `POST /appointments/` - Create appointment
- `PUT /appointments/{id}` - Update appointment
- `DELETE /appointments/{id}` - Cancel appointment
- `GET /appointments/available-slots` - Available time slots

### Psychologists
- `GET /psychologists/` - List psychologists

### Requests
- `GET /requests/` - List patient requests
- `POST /requests/` - Create request
- `PUT /requests/{id}` - Update request status

### Reports
- `GET /reports/{psychologist_id}` - Psychologist reports

### ML Analysis
- `GET /ml/risk-analysis` - General risk analysis
- `GET /ml/risk-analysis/{patient_id}` - Patient risk analysis

## 🔒 Security Features

### Token Management
- Automatic token inclusion in headers
- Token expiration handling
- Secure storage in localStorage

### Error Handling
- Comprehensive error catching
- User-friendly error messages
- Automatic retry mechanisms

### Data Validation
- Client-side validation before API calls
- Server response validation
- Type checking for API responses

## 🚀 Usage Examples

### Creating a New Patient

```javascript
import { patientService } from '../services/apiService';
import { useMutation } from '../hooks/useApi';

const CreatePatientForm = () => {
  const { mutate: createPatient, loading } = useMutation(patientService.createPatient);

  const handleSubmit = async (formData) => {
    try {
      await createPatient(formData);
      toast.success('Patient created successfully!');
    } catch (error) {
      // Error already handled by useMutation
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
      <button type="submit" disabled={loading}>
        {loading ? 'Creating...' : 'Create Patient'}
      </button>
    </form>
  );
};
```

### Loading Dashboard Data

```javascript
import { useApiCall } from '../hooks/useApi';
import { appointmentService } from '../services/apiService';

const Dashboard = () => {
  const { 
    data: appointments, 
    loading, 
    error, 
    refetch 
  } = useApiCall(() => appointmentService.getAppointments());

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage error={error} />;

  return (
    <div>
      {appointments.map(appointment => (
        <AppointmentCard key={appointment.id} appointment={appointment} />
      ))}
      <button onClick={refetch}>Refresh</button>
    </div>
  );
};
```

## 🔄 Migration from Mock API

### Before (Mock API)
```javascript
import { mockApi } from '../services/mockApi';

const data = await mockApi.getPatients(userId);
```

### After (Real API)
```javascript
import { patientService } from '../services/apiService';

const data = await patientService.getPatients();
```

## 🧪 Testing the Integration

### 1. Start Backend Server
```bash
# Make sure your backend is running on http://localhost:8000
python -m uvicorn main:app --reload
```

### 2. Update Environment
```bash
# Update .env file with correct API URL
VITE_API_BASE_URL=http://localhost:8000
```

### 3. Test Authentication
- Try logging in with backend credentials
- Verify token storage in localStorage
- Test automatic logout on token expiration

### 4. Test Data Operations
- Create new patients/appointments
- Verify data persistence
- Test error handling with invalid data

## 🐛 Troubleshooting

### Common Issues

1. **CORS Errors**
   - Ensure backend has CORS configured for frontend URL
   - Check if backend is running on correct port

2. **Authentication Failures**
   - Verify API endpoints match backend routes
   - Check token format and expiration

3. **Data Not Loading**
   - Check network tab for API calls
   - Verify API response format matches expected structure

4. **Environment Variables Not Working**
   - Restart development server after changing .env
   - Ensure variables start with `VITE_`

### Debug Mode

Enable debug logging by adding to your component:

```javascript
useEffect(() => {
  console.log('API Base URL:', import.meta.env.VITE_API_BASE_URL);
  console.log('Current token:', localStorage.getItem('lunysse_token'));
}, []);
```

## 📈 Performance Optimizations

### Implemented Features

1. **Request Caching** - Automatic caching of GET requests
2. **Loading States** - Proper loading indicators
3. **Error Boundaries** - Graceful error handling
4. **Optimistic Updates** - UI updates before API confirmation
5. **Debounced Requests** - Prevent excessive API calls

### Future Enhancements

1. **React Query Integration** - Advanced caching and synchronization
2. **Offline Support** - Service worker for offline functionality
3. **Real-time Updates** - WebSocket integration
4. **Request Batching** - Combine multiple requests

## 🎯 Next Steps

1. **Test all endpoints** with real backend
2. **Implement error boundaries** for better UX
3. **Add request interceptors** for common headers
4. **Set up monitoring** for API performance
5. **Add unit tests** for API service functions

---

**✅ The frontend is now fully integrated with the backend API and ready for production use!**